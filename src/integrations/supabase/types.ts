export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      ai_cache: {
        Row: {
          created_at: string
          expires_at: string
          hit_count: number
          id: string
          persona: string
          prompt_text: string
          query_hash: string
          response_text: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          expires_at?: string
          hit_count?: number
          id?: string
          persona?: string
          prompt_text: string
          query_hash: string
          response_text: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          expires_at?: string
          hit_count?: number
          id?: string
          persona?: string
          prompt_text?: string
          query_hash?: string
          response_text?: string
          updated_at?: string
        }
        Relationships: []
      }
      chapters: {
        Row: {
          created_at: string
          description: string | null
          id: string
          level: string
          order_index: number
          slug: string
          subject: string
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          level: string
          order_index?: number
          slug: string
          subject: string
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          level?: string
          order_index?: number
          slug?: string
          subject?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      freemium_access: {
        Row: {
          created_at: string
          gmail: string
          id: string
          status: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          gmail: string
          id?: string
          status?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          gmail?: string
          id?: string
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      interactions: {
        Row: {
          created_at: string
          id: string
          persona: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          persona: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          persona?: string
          user_id?: string | null
        }
        Relationships: []
      }
      mcq_vault: {
        Row: {
          correct_answer: string
          created_at: string
          diagram_description: string | null
          difficulty: string | null
          id: string
          level: string
          nexus_reasoning: string
          option_a: string
          option_b: string
          option_c: string
          option_d: string
          paper_code: string
          question_number: number
          question_text: string
          session: string
          subtopic: string | null
          topic: string | null
          updated_at: string
          year: number
        }
        Insert: {
          correct_answer: string
          created_at?: string
          diagram_description?: string | null
          difficulty?: string | null
          id?: string
          level: string
          nexus_reasoning: string
          option_a: string
          option_b: string
          option_c: string
          option_d: string
          paper_code: string
          question_number: number
          question_text: string
          session: string
          subtopic?: string | null
          topic?: string | null
          updated_at?: string
          year: number
        }
        Update: {
          correct_answer?: string
          created_at?: string
          diagram_description?: string | null
          difficulty?: string | null
          id?: string
          level?: string
          nexus_reasoning?: string
          option_a?: string
          option_b?: string
          option_c?: string
          option_d?: string
          paper_code?: string
          question_number?: number
          question_text?: string
          session?: string
          subtopic?: string | null
          topic?: string | null
          updated_at?: string
          year?: number
        }
        Relationships: []
      }
      notes: {
        Row: {
          chapter_id: string
          content: string | null
          created_at: string
          id: string
          level: string
          order_index: number
          title: string
          updated_at: string
        }
        Insert: {
          chapter_id: string
          content?: string | null
          created_at?: string
          id?: string
          level: string
          order_index?: number
          title: string
          updated_at?: string
        }
        Update: {
          chapter_id?: string
          content?: string | null
          created_at?: string
          id?: string
          level?: string
          order_index?: number
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      page_views: {
        Row: {
          created_at: string
          id: string
          page: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          page: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          page?: string
          user_id?: string | null
        }
        Relationships: []
      }
      premium_access: {
        Row: {
          access_status: boolean
          created_at: string
          id: string
          updated_at: string
          user_email: string
          whatsapp_verified: boolean
        }
        Insert: {
          access_status?: boolean
          created_at?: string
          id?: string
          updated_at?: string
          user_email: string
          whatsapp_verified?: boolean
        }
        Update: {
          access_status?: boolean
          created_at?: string
          id?: string
          updated_at?: string
          user_email?: string
          whatsapp_verified?: boolean
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          city: string | null
          country: string | null
          created_at: string
          email: string | null
          full_name: string | null
          id: string
          latitude: number | null
          longitude: number | null
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id: string
          latitude?: number | null
          longitude?: number | null
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          latitude?: number | null
          longitude?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      research_cache: {
        Row: {
          category: string | null
          content: string
          content_hash: string
          created_at: string
          expires_at: string
          id: string
          scraped_at: string
          source_domain: string
          source_url: string
          title: string | null
        }
        Insert: {
          category?: string | null
          content: string
          content_hash: string
          created_at?: string
          expires_at?: string
          id?: string
          scraped_at?: string
          source_domain: string
          source_url: string
          title?: string | null
        }
        Update: {
          category?: string | null
          content?: string
          content_hash?: string
          created_at?: string
          expires_at?: string
          id?: string
          scraped_at?: string
          source_domain?: string
          source_url?: string
          title?: string | null
        }
        Relationships: []
      }
      reviews: {
        Row: {
          created_at: string
          id: string
          rating: number
          review_text: string
          reviewer_name: string
        }
        Insert: {
          created_at?: string
          id?: string
          rating: number
          review_text: string
          reviewer_name: string
        }
        Update: {
          created_at?: string
          id?: string
          rating?: number
          review_text?: string
          reviewer_name?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      check_premium_access: { Args: { _email: string }; Returns: boolean }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      track_interaction: { Args: { _persona: string }; Returns: undefined }
      track_page_view:
        | { Args: { _page: string }; Returns: undefined }
        | {
            Args: { _city?: string; _country?: string; _page: string }
            Returns: undefined
          }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "moderator", "user"],
    },
  },
} as const
