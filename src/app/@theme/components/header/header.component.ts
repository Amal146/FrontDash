import {  Component, ElementRef, OnDestroy, OnInit, ViewChild } from "@angular/core";
import {
  NbMediaBreakpointsService,
  NbMenuService,
  NbSidebarService,
  NbThemeService,
} from "@nebular/theme";

import { LayoutService } from "../../../@core/utils";
import { map, takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
import {  NbAuthService } from "@nebular/auth";
import { NotificationService } from "../../../service/notification/notification.service";
import { PopoverNotifyComponent } from "../notification/popover-notify.component";

@Component({
  selector: "ngx-header",
  styleUrls: ["./header.component.scss"],
  templateUrl: "./header.component.html",
})
export class HeaderComponent implements OnInit, OnDestroy {
  user:{} ;
  showNotifications = false;
  unreadCount = 0;

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;

  currentTheme = "cosmic";

  userMenu = [{ title: "Log out", link: 'auth/logout' }];
  currentUser = localStorage.getItem("currentUser");
  notifyComponent = PopoverNotifyComponent;

  themes = [
    { value: "default", name: "Light" },
    { value: "dark", name: "Dark" },
    { value: "cosmic", name: "Cosmic" },
    { value: "corporate", name: "Corporate" },
  ];

  constructor(
    private notificationService: NotificationService,
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private themeService: NbThemeService,
    private layoutService: LayoutService,
    private breakpointService: NbMediaBreakpointsService,
    private authService: NbAuthService
  ) { }
  
  @ViewChild('notificationsInbox') notificationsInbox: ElementRef;
  ngOnInit() {
    const userId = this.currentUser ? JSON.parse(this.currentUser)["id"] : null ; // Replace with dynamic user ID
    this.notificationService.getUnreadNotifications(userId).subscribe(notifications => {
      this.unreadCount = notifications.length;
    });

    this.currentTheme = this.themeService.currentTheme;

    const { xl } = this.breakpointService.getBreakpointsMap();

    this.themeService
      .onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$)
      )
      .subscribe((isLessThanXl: boolean) => (this.userPictureOnly = isLessThanXl));

    this.themeService
      .onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$)
      )
      .subscribe((themeName) => (this.currentTheme = themeName));

    this.authService.onTokenChange().subscribe((token) => {
      console.log("Token change detected:", token);
      if (token.isValid()) {
        this.user = JSON.parse(localStorage.getItem('currentUser')) ;
        console.log(localStorage.getItem('currentUser'))
      }
    });
  }

  toggleNotifications(): void {
    this.showNotifications = !this.showNotifications;
  }
  
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, "menu-sidebar");
    this.layoutService.changeLayoutSize();
    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }
}
