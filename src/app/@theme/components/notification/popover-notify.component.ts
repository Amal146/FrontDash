import { Component, OnInit } from "@angular/core";
import { NotificationService } from "../../../service/notification/notification.service";
import { Notification } from "../../../model/notification";

@Component({
  selector: "ngx-popover-form",
  template: `
    <div class="notifications">
      <div class="notify" *ngFor="let notification of notifications">
        <p>{{ notification.message }}</p>
        <button nbButton status="info" (click)="markAsRead(notification.id)">Mark as read</button>
      </div>
    </div>
  `,
  styles: [`
    .notifications {
      position: absolute;
      right: 0;
      top: 50px;
      background: #25DF6A;
      border: 1px solid #2451D0;
      padding: 10px;
      width: 300px;
    }
    .notify {
      border-bottom: 1px solid #2451D0;
      padding: 10px 0;
    }
    .notify:last-child {
      border-bottom: none; /* Remove border from the last notification */
    }
  `]
})
export class PopoverNotifyComponent implements OnInit {
  constructor(
    private notificationService: NotificationService,
  ) {}

  notifications: Notification[] = [];
  currentUser = localStorage.getItem("currentUser");

  ngOnInit(): void {
    const userId = this.currentUser ? JSON.parse(this.currentUser)["id"] : null ; // Replace with dynamic user ID
    this.notificationService.getUnreadNotifications(userId).subscribe(notifications => {
      this.notifications = notifications;
      console.log('Notifications:', this.notifications);
    });
  }

  markAsRead(id: number) {
    if (id !== undefined && id !== null) {
      this.notificationService.markAsRead(id).subscribe(() => {
        console.log(`Notification ${id} marked as read`);
        // Optionally, remove the notification from the list
        this.notifications = this.notifications.filter(n => n.id !== id);
      }, error => {
        console.error('Error marking notification as read', error);
      });
    } else {
      console.error('Invalid notification ID', id);
    }
  }
}
