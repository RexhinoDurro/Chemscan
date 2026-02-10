import apiClient from './client';
import type { User, Calculation, ReactionLibraryItem } from '@/lib/types';

export async function register(email: string, username: string, password: string) {
  const { data } = await apiClient.post('/api/auth/register/', { email, username, password });
  return data;
}

export async function login(email: string, password: string) {
  const { data } = await apiClient.post('/api/auth/login/', { email, password });
  return data;
}

export async function getProfile(): Promise<User> {
  const { data } = await apiClient.get('/api/auth/profile/');
  return data;
}

export async function getCalculations(page = 1): Promise<{ results: Calculation[]; count: number }> {
  const { data } = await apiClient.get(`/api/calculations/?page=${page}`);
  return data;
}

export async function saveCalculation(calc: Partial<Calculation>): Promise<Calculation> {
  const { data } = await apiClient.post('/api/calculations/', calc);
  return data;
}

export async function getCalculation(id: number): Promise<Calculation> {
  const { data } = await apiClient.get(`/api/calculations/${id}/`);
  return data;
}

export async function deleteCalculation(id: number): Promise<void> {
  await apiClient.delete(`/api/calculations/${id}/`);
}

export async function getReactions(search?: string): Promise<{ results: ReactionLibraryItem[] }> {
  const params = search ? `?search=${encodeURIComponent(search)}` : '';
  const { data } = await apiClient.get(`/api/reactions/${params}`);
  return data;
}
