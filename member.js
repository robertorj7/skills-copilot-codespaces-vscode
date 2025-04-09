function skillMember() {
  return {
    name: "skillMember",
    description: "A member with a skill",
    type: "object",
    properties: {
      id: {
        type: "string",
        description: "The ID of the member",
      },
      name: {
        type: "string",
        description: "The name of the member",
      },
      skill: {
        type: "string",
        description: "The skill of the member",
      },
    },
    required: ["id", "name", "skill"],
  };
} 