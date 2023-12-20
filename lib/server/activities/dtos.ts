export type Action = 'ENROLL' | 'CONFIRM' | 'DISCARD';

export interface PatchActivityDto {
  action: Action;
  userId: string; 
}
