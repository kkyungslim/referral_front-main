'use server';
import { COOKIES } from '../Constants';
import { cookies } from 'next/headers';
import { headers } from 'next/headers';
import { APIuserInfo } from '../API';

export async function serverUser() {
  // const token = (await cookies()).get(COOKIES.user_token)?.value;

  return APIuserInfo();
}

export async function serverPathname() {
  const headersList = await headers();
  const pathname = headersList.get('x-invoke-path') ?? '/';
  return pathname;
}
