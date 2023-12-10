import { mount } from '@vue/test-utils'
import TheConverter from '../TheConverter.vue'
import i18n from '@/i18n'

describe('TheConverter', () => {
  it('should initially hide all outputs', () => {
    const wrapper = mount(TheConverter, {
      global: {
        plugins: [i18n]
      }
    })

    const outputs = wrapper.findAll('p')

    for (const output of outputs) {
      expect(output.isVisible()).toBe(false)
    }
  })

  it('should correctly display converted dates and timestamps based on user input', async () => {
    const wrapper = mount(TheConverter, {
      global: {
        plugins: [i18n]
      }
    })

    const outputs = wrapper.findAll('p')

    const [inputCreateTimeHigh, inputCreateTimeLow] = wrapper.findAll('input')
    await inputCreateTimeHigh.setValue(389409)
    await inputCreateTimeLow.setValue(3480231936)
    expect(outputs[0].text()).toContain('1/1/2023, 12:00:00 AM')

    const inputTimestamp = wrapper.findComponent({ ref: 'vueDatePicker' })
    await inputTimestamp.setValue(1672502400000)
    expect(outputs[1].text()).toContain('389409')
    expect(outputs[2].text()).toContain('3480231936')
  })
})
