import { defineType } from "sanity";

// TODO : The options are actually not available in the studio. Read the docs to understand more on how to create custom types and schemas.
// https://www.sanity.io/schemas/breaks-for-portable-text-189dba35
export default defineType({
    name: 'break',
    type: 'object',
    title: 'Break',
    fields: [
        {
            name: 'style',
            type: 'string',
            options: {
                list: ['break', 'readMore']
            }
        }
    ]
})