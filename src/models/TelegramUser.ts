import { Model } from "./Model";

export interface TelegramUser extends Model {
    telegram_id: string;
    telegram_username: string;
    referral_id: string | null;
    balance: number;
}  