import { defineType, defineArrayMember } from 'sanity'

// Reference: https://www.sanity.io/docs/block-content
export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
    }),

    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    defineArrayMember({
      type: 'image',
      options: { hotspot: true },
    }),

    defineArrayMember({
      type: 'code',
    })
  ],
})
