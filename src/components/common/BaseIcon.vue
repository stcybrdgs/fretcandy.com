<template>
  <component
    :is="iconComponent"
    role="img"
    class="inline-block fill-current"
    style="height: 1em; width: 1em"
  />
</template>

<script>
import AccountIcon from '@/components/common/mdicons/AccountIcon.vue'
import HelpIcon from '@/components/common/mdicons/HelpIcon.vue'
import BellIcon from '@/components/common/mdicons/BellIcon.vue'
import PencilIcon from '@/components/common/mdicons/PencilIcon.vue'

const icons = {
  account: AccountIcon,
  help: HelpIcon,
  bell: BellIcon,
  pencil: PencilIcon,
}

export default {
  props: {
    name: {
      type: String,
      required: true,
      validator(value) {
        return Object.prototype.hasOwnProperty.call(icons, value)
      },
    },
  },

  computed: {
    iconComponent() {
      return icons[this.name]
    },
  },
}
</script>
