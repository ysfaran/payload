import type { GlobalConfig } from '../../../../packages/payload/src/globals/config/types'

export const menuSlug = 'menu'

export const MenuGlobal: GlobalConfig = {
  slug: menuSlug,
  fields: [
    {
      name: 'name',
      type: 'text',
      defaultValue: 'initialValueRoot',
      hooks: {
        afterChange: [
          ({ value, previousValue }) => {
            if (value !== previousValue) {
              return `${previousValue} ${value}`
            }
          },
        ],
      },
    },
    {
      name: 'submenu',
      type: 'group',
      fields: [
        {
          name: 'name',
          type: 'text',
          defaultValue: 'initialValueSub',
          hooks: {
            afterChange: [
              ({ value, previousValue }) => {
                if (value !== previousValue) {
                  return `${previousValue} ${value}`
                }
              },
            ],
          },
        },
      ],
    },
  ],
}
