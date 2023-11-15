import { User } from "@prisma/client";

export const UserQuery = {
    /**
     * Gets the information of a user by its email.
     * @param parent The field's parent.
     * @param args The arguments for the current field.
     * @param contextValue The context of the current operation.
     * @returns The information of the user.
     */
    profile(parent, args, contextValue): User {
        return contextValue.prisma.User.findUnique({
            where: {
                email: args.email
            },
            include: {
                interests: true,
                skills: {
                    include: {group: true}
                },
            }
        });
    }
}