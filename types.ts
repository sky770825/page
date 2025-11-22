import React from 'react';

export interface HonorMember {
  id: string;
  name: string;
  title: string;
  imageUrl: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  subtitle: string;
  link: string;
  iconClass: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: React.ReactNode;
}

export interface MeetingInfo {
  zoomUrl: string;
  meetingId: string;
  label: string;
  isPriority?: boolean;
}