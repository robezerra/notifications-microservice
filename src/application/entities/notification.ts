import { Content } from './notification-content';

export interface NotificationProps {
  content: Content;
  category: string;
  createdAt: Date;
  readAt?: Date | null;
  recipientId: string;
}

export class Notification {
  private props: NotificationProps;

  constructor(props: NotificationProps) {
    this.props = props;
  }

  public get content(): Content {
    return this.props.content;
  }

  public set content(content: Content) {
    this.props.content = content;
  }

  public get category(): string {
    return this.props.category;
  }

  public set category(category: string) {
    this.props.category = category;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public get readAt(): Date | undefined | null {
    return this.props.readAt;
  }

  public set readAt(readAt: Date | undefined | null) {
    this.props.readAt = readAt;
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }
}
