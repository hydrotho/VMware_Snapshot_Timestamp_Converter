import { describe, it, expect } from 'vitest'

import { config, mount } from '@vue/test-utils'
import Converter from '../Converter.vue'

config.global.mocks = {
  $t: (text) => text
}

describe('Converter', () => {
  it('should outputs be invisible at initialization', () => {
    const wrapper = mount(Converter)
    const outputs = wrapper.findAll('p')
    for (const output of outputs) {
      expect(output.isVisible()).toBe(false)
    }
  })

  it('should convert properly', async () => {
    const wrapper = mount(Converter)
    const outputs = wrapper.findAll('p')

    const [inputCreateTimeHigh, inputCreateTimeLow] = wrapper.findAll('input')
    await inputCreateTimeHigh.setValue(389409)
    await inputCreateTimeLow.setValue(3480231936)
    expect(outputs[0].text()).toContain('1/1/2023, 12:00:00 AM')

    const inputTimestamp = wrapper.findComponent({ ref: 'datepicker' })
    await inputTimestamp.setValue(1672502400000)
    expect(outputs[1].text()).toContain('389409')
    expect(outputs[2].text()).toContain('3480231936')
  })
})
