import { defineType } from "sanity";

// TODO : The options are actually not available in the studio. Read the docs to understand more on how to create custom types and schemas.
// https://www.sanity.io/schemas/breaks-for-portable-text-189dba35
export default defineType({
    name: 'lineBreak',
    type: 'object',
    title: 'Line Break',
    fields: [
        {
            title: 'Line Break Component',
            name: 'lineBreakComponent',
            type: 'string',
            initialValue: '<br/>',
        }
    ]
})