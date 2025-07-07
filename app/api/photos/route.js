import { getAllPhotos } from '@/app/lib/inage-data';
import { NextResponse } from 'next/server';

export async function GET() {
  const data = getAllPhotos();
  return NextResponse.json(data);
}
