import { defineType, defineArrayMember } from 'sanity'

// Reference: https://www.sanity.io/docs/form-components#0319196f086b
const BreakPreviewComponent = (props: any) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div>
        {"<----"}
      </div>

      <div>
        {"Line Break"}
      </div>

      <div>
        {props.renderDefault(props)}
      </div>
    </div>
  )
}

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

    // Reference: https://www.sanity.io/schemas/breaks-for-portable-text-189dba35
    defineArrayMember({
      type: 'lineBreak',
      components: {
        preview: BreakPreviewComponent
      }
    })
  ],
})
