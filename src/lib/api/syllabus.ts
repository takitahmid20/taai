import { apiClient } from "./client";
import { ENDPOINTS } from "./config";

// Types
export type SyllabusNode = {
  id: number;
  name: string;
  entity_type: string;
  description: string;
  difficulty_level: string;
  week_or_unit: string;
};

export type SyllabusEdge = {
  id: number;
  source: string;
  target: string;
  relationship_type: string;
  strength: number;
  reason: string;
};

export type SyllabusGraph = {
  nodes: SyllabusNode[];
  edges: SyllabusEdge[];
};

export type SyllabusQueryResult = {
  answer: string;
  matched_entities: { name: string; type: string; similarity: number }[];
  prerequisites: string[];
  related_topics: string[];
};

export type PrerequisiteEntry = {
  name: string;
  entity_type: string;
  difficulty_level: string;
  depth: number;
};

type SyllabusUploadResponse = {
  message: string;
  data: {
    syllabus_id: number;
    status: string;
    entity_count: number;
    relationship_count: number;
  };
};

type SyllabusGraphResponse = {
  message: string;
  data: SyllabusGraph;
};

