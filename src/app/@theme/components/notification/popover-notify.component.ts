import { Component, OnInit } from "@angular/core";
import { NotificationService } from "../../../service/notification/notification.service";
import { Notification } from "../../../model/notification";

@Component({
  selector: "ngx-popover-form",
  template: `
    <div class="notifications">
      <label class="notifications-label">    ¤ Notifications ¤    </label>
      <div class="notify" *ngFor="let notification of notifications">
        <p>{{ notification.message }}</p>
        <button nbButton status="primary" (click)="markAsRead(notification.id)">
          Mark as read
        </button>
      </div>
      <p *ngIf="!notifications?.length">No notifications right now.</p>
    </div>
  `,
  styles: [
    `
      .notifications {
        position: absolute;
        color: #3366ff;
        right: 0;
        top: 50px;
        background: #cfd6db;
        border: 3px solid #00d68f;
        padding: 10px;
        width: 300px;
      }
      .notifications-label {
        font-size: 24px;
        position: absolute;
        top: -20px;
        left: 10px;
        background: #cfd6db;
        font-weight: bold;
      }
      .notify p {
        color: black;
      }
      p {
        color: black;
        font-size: 24px;
      }
      .notify {
        border-bottom: 1px solid #222b45;
        padding: 10px 0;
      }
      .notify:last-child {
        border-bottom: none; 
      }
    `,
  ],
})
export class PopoverNotifyComponent implements OnInit {
  constructor(private notificationService: NotificationService) {}

  notifications: Notification[] = [];
  currentUser = localStorage.getItem("currentUser");

  ngOnInit(): void {
    const userId = this.currentUser ? JSON.parse(this.currentUser)["id"] : null; // Replace with dynamic user ID
    this.notificationService
      .getUnreadNotifications(userId)
      .subscribe((notifications) => {
        this.notifications = notifications;
        console.log("Notifications:", this.notifications);
      });
  }

  markAsRead(id: number) {
    if (id !== undefined && id !== null) {
      this.notificationService.markAsRead(id).subscribe(
        () => {
          console.log(`Notification ${id} marked as read`);
          // Optionally, remove the notification from the list
          this.notifications = this.notifications.filter((n) => n.id !== id);
        },
        (error) => {
          console.error("Error marking notification as read", error);
        }
      );
    } else {
      console.error("Invalid notification ID", id);
    }
  }
}
