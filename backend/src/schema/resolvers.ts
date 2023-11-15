export const SkillResolvers = {
    /**
     * Returns the group of a skill.
     * @param parent The field's parent.
     * @returns The group name of the skill.
     */
    group: (parent) => {
        return parent.group.name;
    }
}