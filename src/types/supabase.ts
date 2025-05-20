export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      activities: {
        Row: {
          id: string
          created_at: string
          title: string
          description: string
          category_id: string
          instructor_id: string
          price: number
          min_age: number
          max_age: number
          location: string
          image_url: string
          schedule: Json
          capacity: number
          is_active: boolean
        }
        Insert: {
          id?: string
          created_at?: string
          title: string
          description: string
          category_id: string
          instructor_id: string
          price: number
          min_age: number
          max_age: number
          location: string
          image_url: string
          schedule: Json
          capacity: number
          is_active?: boolean
        }
        Update: {
          id?: string
          created_at?: string
          title?: string
          description?: string
          category_id?: string
          instructor_id?: string
          price?: number
          min_age?: number
          max_age?: number
          location?: string
          image_url?: string
          schedule?: Json
          capacity?: number
          is_active?: boolean
        }
      }
      activity_categories: {
        Row: {
          id: string
          name: string
          description: string
          icon: string
          image_url: string
        }
        Insert: {
          id?: string
          name: string
          description: string
          icon: string
          image_url: string
        }
        Update: {
          id?: string
          name?: string
          description?: string
          icon?: string
          image_url?: string
        }
      }
      bookings: {
        Row: {
          id: string
          created_at: string
          activity_id: string
          parent_id: string
          child_id: string
          status: string
          payment_status: string
          payment_id: string | null
          notes: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          activity_id: string
          parent_id: string
          child_id: string
          status?: string
          payment_status?: string
          payment_id?: string | null
          notes?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          activity_id?: string
          parent_id?: string
          child_id?: string
          status?: string
          payment_status?: string
          payment_id?: string | null
          notes?: string | null
        }
      }
      children: {
        Row: {
          id: string
          created_at: string
          parent_id: string
          first_name: string
          last_name: string
          birth_date: string
          interests: string[]
          special_needs: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          parent_id: string
          first_name: string
          last_name: string
          birth_date: string
          interests?: string[]
          special_needs?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          parent_id?: string
          first_name?: string
          last_name?: string
          birth_date?: string
          interests?: string[]
          special_needs?: string | null
        }
      }
      instructor_profiles: {
        Row: {
          id: string
          created_at: string
          user_id: string
          business_name: string
          description: string
          phone: string
          website: string | null
          qualifications: string[]
          is_verified: boolean
          rating: number | null
        }
        Insert: {
          id?: string
          created_at?: string
          user_id: string
          business_name: string
          description: string
          phone: string
          website?: string | null
          qualifications?: string[]
          is_verified?: boolean
          rating?: number | null
        }
        Update: {
          id?: string
          created_at?: string
          user_id?: string
          business_name?: string
          description?: string
          phone?: string
          website?: string | null
          qualifications?: string[]
          is_verified?: boolean
          rating?: number | null
        }
      }
      parent_profiles: {
        Row: {
          id: string
          created_at: string
          user_id: string
          phone: string
          address: string
          preferences: Json | null
        }
        Insert: {
          id?: string
          created_at?: string
          user_id: string
          phone: string
          address: string
          preferences?: Json | null
        }
        Update: {
          id?: string
          created_at?: string
          user_id?: string
          phone?: string
          address?: string
          preferences?: Json | null
        }
      }
      reviews: {
        Row: {
          id: string
          created_at: string
          activity_id: string
          parent_id: string
          rating: number
          comment: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          activity_id: string
          parent_id: string
          rating: number
          comment?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          activity_id?: string
          parent_id?: string
          rating?: number
          comment?: string | null
        }
      }
      user_profiles: {
        Row: {
          id: string
          created_at: string
          first_name: string
          last_name: string
          avatar_url: string | null
          user_type: string
        }
        Insert: {
          id?: string
          created_at?: string
          first_name: string
          last_name: string
          avatar_url?: string | null
          user_type: string
        }
        Update: {
          id?: string
          created_at?: string
          first_name?: string
          last_name?: string
          avatar_url?: string | null
          user_type?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}