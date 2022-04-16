<template>
  <div ref="example-element">{{ propertyComputed }}</div>
</template>
<script>
export default {
  data() {
    return {
      property: 'Example property.'
    }
  },
  computed: {
    propertyComputed() {
      return this.property
    }
  },
  created() {
    console.log('At this point, this.property is now reactive and propertyComputed will update.')
    this.property = 'Example property updated.'
  },
  beforeMount() {
    console.log(`At this point, vm.$el has not been created yet.`)
  },
  mounted() {
    console.log(`At this point, vm.$el has been created and el has been
replaced.`);
    console.log(this.$el.textContent) // Example component.
  },
  beforeUpdate() {
    console.log(`At this point, Virtual DOM has not re-rendered or patched yet.`)
// Logs the counter value every second, before the DOM updates.
    console.log(this.counter)
  },
  updated() {
    console.log(`At this point, Virtual DOM has re-rendered and patched.`)
// Fired every second, should always be true
    console.log(+this.$refs['example-element'].textContent === this.counter)
  },
  beforeDestroy() {
    console.log(`At this point, watchers, child components, and event listeners
have not been teared down yet.`)
// Perform the teardown procedure for exampleLeakyProperty.
// (In this case, effectively nothing)
    this.exampleLeakyProperty = null
    delete this.exampleLeakyProperty
  },
  destroyed() {
    console.log(`At this point, watchers, child components, and event listeners
have been torn down.`)
    console.log(this)
    ExampleAnalyticsService.informService('Component destroyed.')
  }
}
</script>
