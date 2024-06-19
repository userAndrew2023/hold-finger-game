import apiClient from './api';
import { TelegramUser } from '../models/TelegramUser';

const telegramUserService =  {
  async getUsers(): Promise<TelegramUser[]> {
    const response = await apiClient.get<TelegramUser[]>('/telegram-users');
    return response.data;
  },
  async getUser(userId: number): Promise<TelegramUser> {
    const response = await apiClient.get<TelegramUser>(`/telegram-users/${userId}`);
    return response.data;
  },
  async getUserByTelegramId(telegramId: number): Promise<TelegramUser> {
    const response = await apiClient.get<TelegramUser>(`/telegram-users/${telegramId}?type=telegram`);
    return response.data;
  },
  async createUser(user: TelegramUser): Promise<TelegramUser> {
    const response = await apiClient.post<TelegramUser>('/telegram-users', user);
    return response.data;
  },
  async updateUser(user: any): Promise<TelegramUser> {
    const response = await apiClient.put<TelegramUser>(`/telegram-users/${user.id}`, user);
    return response.data;
  }
};

export default telegramUserService;
