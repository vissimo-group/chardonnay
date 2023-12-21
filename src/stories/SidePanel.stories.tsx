import type { Meta, StoryObj } from '@storybook/react'

import { styled } from 'styled-components'

import * as SidePanel from '../components/SidePanel'

import { BorderRadius, Colors } from '../tokens'
import { SidePanelRootProps } from '../components/SidePanel/SidePanelRoot/type'

//* PLACEHOLDERS */

const ScrollableExample = styled.p`
  color: black;
  background-color: transparent;
  display: flex;
  width: 100%;
  margin: 0;
  padding: 0;
  flex-direction: column;
  text-align: justify;
  padding-right: 4px;
`

//* META */

const meta: Meta = {
  title: 'Components/Side Panel',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta

//* STORIES */

type Story = StoryObj<SidePanelRootProps>

export const ClosedSidePanel: Story = {
  name: 'Closed Side Panel',
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Indicates if side panel starts "open" or "closed"',
    },
    minWidth: {
      control: 'text',
      description: 'Min width of content. Must be like `300px` or `20%`',
    },
    maxWidth: {
      control: 'text',
      description: 'Max width of content. Must be like `300px` or `20%`',
    },
  },
  parameters: {
    actions: {
      handles: ['click', 'SidePanel.Trigger'],
    },
  },
  args: {
    minWidth: '100px',
    maxWidth: '80%',
    open: false,
  },
  render: ({ open, minWidth, maxWidth }) => {
    return (
      <>
        <SidePanel.Root open={open} minWidth={minWidth} maxWidth={maxWidth}>
          <SidePanel.Trigger>
            <h1
              style={{
                margin: 0,
                padding: '16px',
                position: 'relative',
                color: Colors.light.brand.brand200,
                fontSize: '2rem',
                zIndex: 0,
              }}
            >
              Abrir Painel
            </h1>
          </SidePanel.Trigger>

          <SidePanel.Overlay />
          <SidePanel.Content>
            <ScrollableExample>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              neque elit, bibendum vel vulputate eget, iaculis in turpis.
              Aliquam efficitur cursus metus, at dapibus dui finibus quis.
              Integer commodo hendrerit nisl et viverra. Proin leo dolor,
              tincidunt ut sodales ut, pretium vitae ipsum. Pellentesque iaculis
              molestie quam, eget congue lacus imperdiet viverra. Morbi
              malesuada in augue at porttitor. Aenean finibus ex elit, eu
              ultrices mi luctus in. Nunc vitae nunc non nunc auctor aliquet
              vitae a mi. Donec rhoncus sapien quis tincidunt dignissim. Ut
              laoreet varius neque vel ornare. Vestibulum sodales risus eget
              justo vestibulum sollicitudin. Etiam dapibus, tortor et fringilla
              consequat, sapien velit placerat sapien, vel eleifend erat mauris
              vitae odio. Suspendisse aliquet erat id eleifend tincidunt.
              Curabitur mattis eros et sem laoreet lobortis. Nunc enim tortor,
              lacinia a bibendum et, facilisis sed sem. Quisque felis magna,
              tristique nec felis id, lacinia efficitur dui. Nam lacinia
              sagittis erat, at ultricies velit malesuada quis. Proin dolor
              justo, rhoncus varius turpis sit amet, fermentum egestas lorem.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Phasellus sollicitudin sodales
              lacus non pellentesque. Sed massa augue, volutpat ac accumsan non,
              suscipit a magna. Aliquam hendrerit, nulla sit amet sodales
              aliquet, neque eros placerat metus, fringilla porttitor nisl magna
              eget lectus. Phasellus quis quam nec neque porttitor tempor.
              Quisque eu faucibus odio, eget malesuada ipsum. Integer vitae
              justo nec ante eleifend porta quis nec nisi. Proin nec est
              eleifend, sodales felis ut, tincidunt erat. Mauris sed mollis
              nisl. Morbi iaculis tincidunt scelerisque. Donec a posuere magna.
              Pellentesque faucibus mi accumsan condimentum posuere. Maecenas
              posuere congue libero, vel feugiat lacus volutpat ut. Aenean
              lobortis erat quis nibh iaculis, ac eleifend ex dignissim. Mauris
              ante urna, euismod vitae dignissim non, viverra ut velit. Interdum
              et malesuada fames ac ante ipsum primis in faucibus. Sed tristique
              dolor a sem pretium euismod. Donec non aliquam purus. Orci varius
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Nullam quis tristique massa. Maecenas scelerisque
              ipsum augue. Suspendisse vulputate dapibus velit, in tincidunt
              erat molestie vel. Morbi at enim eros. Sed a varius nisi, et
              mattis massa. Ut non tellus ut mi semper pulvinar. Vestibulum id
              massa nibh. Donec porta consequat maximus. Ut mauris elit, aliquet
              mattis tincidunt non, sagittis non enim. Nullam at blandit erat.
              Vestibulum imperdiet volutpat orci, at aliquet justo ultricies at.
              Donec ac odio in sapien lacinia vestibulum eget id nisl. Duis
              posuere, nibh sed commodo pharetra, purus ante lacinia sem, et
              consequat odio sapien nec nunc. Maecenas imperdiet viverra
              suscipit. Morbi ac lacinia massa. Integer massa nisi, malesuada eu
              egestas eu, vestibulum ac ipsum. Nullam sollicitudin nunc et arcu
              consequat vehicula. Suspendisse rutrum pharetra orci, vel luctus
              mi tincidunt sit amet. Suspendisse eget sapien at ligula congue
              laoreet dapibus ut nisi. Pellentesque elementum, nunc sit amet
              ullamcorper mollis, sem velit tempus dui, sit amet euismod mauris
              ligula quis nisi. In ut purus et orci feugiat lobortis vitae in
              urna. Orci varius natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. Sed iaculis elit sed viverra
              vestibulum. Cras vitae est pharetra, finibus libero quis, sagittis
              dolor. Praesent ipsum diam, fringilla eu ipsum et, pharetra mollis
              felis. Vivamus bibendum suscipit gravida. Curabitur finibus urna
              fermentum augue condimentum sagittis. Fusce ornare a leo sed
              auctor. Etiam nisl felis, pellentesque ac diam sed, pulvinar
              efficitur purus. Curabitur ut laoreet mauris. Aenean porta
              tincidunt turpis a porttitor. Integer non tellus quis tortor
              iaculis posuere sit amet convallis orci. Ut accumsan vehicula
              nulla a blandit. Praesent justo velit, sodales quis aliquam in,
              egestas at ligula. Aliquam purus dui, consectetur non sagittis eu,
              mollis mollis justo. Nulla facilisi. Proin rhoncus diam et diam
              efficitur condimentum. Cras ornare lectus urna, in commodo nulla
              vehicula a. Proin id vulputate est. Duis sodales purus sed velit
              dapibus, vitae pellentesque turpis rhoncus. Cras ipsum nisl,
              sodales quis auctor tempus, placerat eu ex. Cras in tellus justo.
              Aliquam ex lorem, placerat eget dapibus quis, pellentesque id
              velit. Sed ultrices erat leo, sit amet condimentum ex luctus et.
              Quisque ornare est velit, vitae molestie enim rutrum sed. Fusce
              sollicitudin posuere nisl, aliquet placerat risus interdum vel.
              Integer erat mauris, blandit nec tellus in, eleifend viverra
              turpis. Aenean ac magna eget nibh malesuada suscipit. Pellentesque
              varius ac orci a facilisis. Vestibulum accumsan justo non pharetra
              varius. Ut consequat nunc consequat, egestas nibh at, pulvinar
              urna. Sed a ipsum ullamcorper, aliquam felis a, maximus magna. Sed
              iaculis quam faucibus pulvinar feugiat. In hac habitasse platea
              dictumst. Aenean laoreet ac nulla eu fringilla. Morbi augue ipsum,
              ornare at felis eu, cursus consectetur libero. Sed erat mi, semper
              et nisi nec, finibus tempor odio. Fusce a aliquet tellus. Morbi ac
              aliquam lectus. Nullam efficitur metus eu commodo lobortis.
              Praesent finibus a turpis at interdum. In hac habitasse platea
              dictumst. Nullam iaculis turpis sit amet condimentum finibus.
              Morbi ac nibh fermentum, aliquet dolor in, gravida leo. Sed
              scelerisque ipsum eu cursus ultrices. Ut nibh nibh, aliquet a
              placerat id, dignissim ut purus. Aenean cursus mi euismod aliquam
              facilisis. Donec laoreet neque vitae turpis convallis facilisis.
              Pellentesque sem quam, tempus sed lectus non, egestas sollicitudin
              massa. Quisque nulla nulla, pulvinar sit amet ultrices ac, egestas
              vitae sapien. Fusce sit amet ipsum in diam tristique vestibulum.
              Pellentesque quis risus tellus. Curabitur aliquet congue nisl vel
              sodales. Integer sodales risus aliquam, lacinia purus vel,
              sollicitudin purus. Nunc eget dolor interdum, laoreet elit non,
              tristique nunc. Quisque orci eros, vehicula quis ex a, gravida
              dignissim enim. Nullam tempus, ipsum vel fringilla sagittis, justo
              ipsum blandit nisi, quis placerat ipsum massa eget sem.
            </ScrollableExample>
          </SidePanel.Content>
        </SidePanel.Root>
      </>
    )
  },
}

export const OpenSidePanel: Story = {
  name: 'Open Side Panel',
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Indicates if side panel starts "open" or "closed"',
    },
    minWidth: {
      control: 'text',
      description: 'Min width of content. Must be like `300px` or `20%`',
    },
    maxWidth: {
      control: 'text',
      description: 'Max width of content. Must be like `300px` or `20%`',
    },
  },
  args: {
    minWidth: '100px',
    maxWidth: '80%',
    open: true,
  },
  render: ({ open, minWidth, maxWidth }) => {
    return (
      <>
        <SidePanel.Root open={open} minWidth={minWidth} maxWidth={maxWidth}>
          <SidePanel.Trigger>
            <h1
              style={{
                margin: 0,
                padding: '16px',
                position: 'relative',
                color: Colors.light.brand.brand200,
                fontSize: '2rem',
                zIndex: 0,
              }}
            >
              Abrir Painel
            </h1>
          </SidePanel.Trigger>

          <SidePanel.Overlay />
          <SidePanel.Content>
            <ScrollableExample>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              neque elit, bibendum vel vulputate eget, iaculis in turpis.
              Aliquam efficitur cursus metus, at dapibus dui finibus quis.
              Integer commodo hendrerit nisl et viverra. Proin leo dolor,
              tincidunt ut sodales ut, pretium vitae ipsum. Pellentesque iaculis
              molestie quam, eget congue lacus imperdiet viverra. Morbi
              malesuada in augue at porttitor. Aenean finibus ex elit, eu
              ultrices mi luctus in. Nunc vitae nunc non nunc auctor aliquet
              vitae a mi. Donec rhoncus sapien quis tincidunt dignissim. Ut
              laoreet varius neque vel ornare. Vestibulum sodales risus eget
              justo vestibulum sollicitudin. Etiam dapibus, tortor et fringilla
              consequat, sapien velit placerat sapien, vel eleifend erat mauris
              vitae odio. Suspendisse aliquet erat id eleifend tincidunt.
              Curabitur mattis eros et sem laoreet lobortis. Nunc enim tortor,
              lacinia a bibendum et, facilisis sed sem. Quisque felis magna,
              tristique nec felis id, lacinia efficitur dui. Nam lacinia
              sagittis erat, at ultricies velit malesuada quis. Proin dolor
              justo, rhoncus varius turpis sit amet, fermentum egestas lorem.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Phasellus sollicitudin sodales
              lacus non pellentesque. Sed massa augue, volutpat ac accumsan non,
              suscipit a magna. Aliquam hendrerit, nulla sit amet sodales
              aliquet, neque eros placerat metus, fringilla porttitor nisl magna
              eget lectus. Phasellus quis quam nec neque porttitor tempor.
              Quisque eu faucibus odio, eget malesuada ipsum. Integer vitae
              justo nec ante eleifend porta quis nec nisi. Proin nec est
              eleifend, sodales felis ut, tincidunt erat. Mauris sed mollis
              nisl. Morbi iaculis tincidunt scelerisque. Donec a posuere magna.
              Pellentesque faucibus mi accumsan condimentum posuere. Maecenas
              posuere congue libero, vel feugiat lacus volutpat ut. Aenean
              lobortis erat quis nibh iaculis, ac eleifend ex dignissim. Mauris
              ante urna, euismod vitae dignissim non, viverra ut velit. Interdum
              et malesuada fames ac ante ipsum primis in faucibus. Sed tristique
              dolor a sem pretium euismod. Donec non aliquam purus. Orci varius
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Nullam quis tristique massa. Maecenas scelerisque
              ipsum augue. Suspendisse vulputate dapibus velit, in tincidunt
              erat molestie vel. Morbi at enim eros. Sed a varius nisi, et
              mattis massa. Ut non tellus ut mi semper pulvinar. Vestibulum id
              massa nibh. Donec porta consequat maximus. Ut mauris elit, aliquet
              mattis tincidunt non, sagittis non enim. Nullam at blandit erat.
              Vestibulum imperdiet volutpat orci, at aliquet justo ultricies at.
              Donec ac odio in sapien lacinia vestibulum eget id nisl. Duis
              posuere, nibh sed commodo pharetra, purus ante lacinia sem, et
              consequat odio sapien nec nunc. Maecenas imperdiet viverra
              suscipit. Morbi ac lacinia massa. Integer massa nisi, malesuada eu
              egestas eu, vestibulum ac ipsum. Nullam sollicitudin nunc et arcu
              consequat vehicula. Suspendisse rutrum pharetra orci, vel luctus
              mi tincidunt sit amet. Suspendisse eget sapien at ligula congue
              laoreet dapibus ut nisi. Pellentesque elementum, nunc sit amet
              ullamcorper mollis, sem velit tempus dui, sit amet euismod mauris
              ligula quis nisi. In ut purus et orci feugiat lobortis vitae in
              urna. Orci varius natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. Sed iaculis elit sed viverra
              vestibulum. Cras vitae est pharetra, finibus libero quis, sagittis
              dolor. Praesent ipsum diam, fringilla eu ipsum et, pharetra mollis
              felis. Vivamus bibendum suscipit gravida. Curabitur finibus urna
              fermentum augue condimentum sagittis. Fusce ornare a leo sed
              auctor. Etiam nisl felis, pellentesque ac diam sed, pulvinar
              efficitur purus. Curabitur ut laoreet mauris. Aenean porta
              tincidunt turpis a porttitor. Integer non tellus quis tortor
              iaculis posuere sit amet convallis orci. Ut accumsan vehicula
              nulla a blandit. Praesent justo velit, sodales quis aliquam in,
              egestas at ligula. Aliquam purus dui, consectetur non sagittis eu,
              mollis mollis justo. Nulla facilisi. Proin rhoncus diam et diam
              efficitur condimentum. Cras ornare lectus urna, in commodo nulla
              vehicula a. Proin id vulputate est. Duis sodales purus sed velit
              dapibus, vitae pellentesque turpis rhoncus. Cras ipsum nisl,
              sodales quis auctor tempus, placerat eu ex. Cras in tellus justo.
              Aliquam ex lorem, placerat eget dapibus quis, pellentesque id
              velit. Sed ultrices erat leo, sit amet condimentum ex luctus et.
              Quisque ornare est velit, vitae molestie enim rutrum sed. Fusce
              sollicitudin posuere nisl, aliquet placerat risus interdum vel.
              Integer erat mauris, blandit nec tellus in, eleifend viverra
              turpis. Aenean ac magna eget nibh malesuada suscipit. Pellentesque
              varius ac orci a facilisis. Vestibulum accumsan justo non pharetra
              varius. Ut consequat nunc consequat, egestas nibh at, pulvinar
              urna. Sed a ipsum ullamcorper, aliquam felis a, maximus magna. Sed
              iaculis quam faucibus pulvinar feugiat. In hac habitasse platea
              dictumst. Aenean laoreet ac nulla eu fringilla. Morbi augue ipsum,
              ornare at felis eu, cursus consectetur libero. Sed erat mi, semper
              et nisi nec, finibus tempor odio. Fusce a aliquet tellus. Morbi ac
              aliquam lectus. Nullam efficitur metus eu commodo lobortis.
              Praesent finibus a turpis at interdum. In hac habitasse platea
              dictumst. Nullam iaculis turpis sit amet condimentum finibus.
              Morbi ac nibh fermentum, aliquet dolor in, gravida leo. Sed
              scelerisque ipsum eu cursus ultrices. Ut nibh nibh, aliquet a
              placerat id, dignissim ut purus. Aenean cursus mi euismod aliquam
              facilisis. Donec laoreet neque vitae turpis convallis facilisis.
              Pellentesque sem quam, tempus sed lectus non, egestas sollicitudin
              massa. Quisque nulla nulla, pulvinar sit amet ultrices ac, egestas
              vitae sapien. Fusce sit amet ipsum in diam tristique vestibulum.
              Pellentesque quis risus tellus. Curabitur aliquet congue nisl vel
              sodales. Integer sodales risus aliquam, lacinia purus vel,
              sollicitudin purus. Nunc eget dolor interdum, laoreet elit non,
              tristique nunc. Quisque orci eros, vehicula quis ex a, gravida
              dignissim enim. Nullam tempus, ipsum vel fringilla sagittis, justo
              ipsum blandit nisi, quis placerat ipsum massa eget sem.
            </ScrollableExample>
          </SidePanel.Content>
        </SidePanel.Root>
      </>
    )
  },
}

export const WithCloseButtonSidePanel: Story = {
  name: 'With Close Button Side Panel',
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Indicates if side panel starts "open" or "closed"',
    },
    minWidth: {
      control: 'text',
      description: 'Min width of content. Must be like `300px` or `20%`',
    },
    maxWidth: {
      control: 'text',
      description: 'Max width of content. Must be like `300px` or `20%`',
    },
  },
  args: {
    minWidth: '300px',
    maxWidth: '100%',
    open: false,
    fullscreen: true,
  },
  render: ({ open, fullscreen, minWidth, maxWidth }) => {
    return (
      <>
        <SidePanel.Root
          open={open}
          fullscreen={fullscreen}
          minWidth={minWidth}
          maxWidth={maxWidth}
        >
          <SidePanel.Trigger>
            <h1
              style={{
                margin: 0,
                padding: '16px',
                position: 'relative',
                color: Colors.light.brand.brand200,
                fontSize: '2rem',
                zIndex: 0,
              }}
            >
              Abrir Painel
            </h1>
          </SidePanel.Trigger>

          <SidePanel.Overlay />
          <SidePanel.Content>
            <SidePanel.Close>
              <span
                style={{
                  padding: '16px 32px',
                  fontSize: '1rem',
                  borderRadius: BorderRadius['3'],
                }}
              >
                Close
              </span>
            </SidePanel.Close>
          </SidePanel.Content>
        </SidePanel.Root>
      </>
    )
  },
}

export const FullscreenSidePanel: Story = {
  name: 'Fullscreen Side Panel',
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Indicates if side panel starts "open" or "closed"',
    },
    minWidth: {
      control: 'text',
      description: 'Min width of content. Must be like `300px` or `20%`',
    },
    maxWidth: {
      control: 'text',
      description: 'Max width of content. Must be like `300px` or `20%`',
    },
    fullscreen: {
      control: 'boolean',
      description: 'Indicates if side panel starts with "fullscreen" mode',
    },
  },
  args: {
    minWidth: '100px',
    maxWidth: '100%',
    open: false,
  },
  render: ({ open, minWidth, maxWidth }) => {
    return (
      <>
        <SidePanel.Root open={open} minWidth={minWidth} maxWidth={maxWidth}>
          <SidePanel.Trigger>
            <h1
              style={{
                margin: 0,
                padding: '16px',
                position: 'relative',
                color: Colors.light.brand.brand200,
                fontSize: '2rem',
                zIndex: 0,
              }}
            >
              Abrir Painel
            </h1>
          </SidePanel.Trigger>

          <SidePanel.Overlay />
          <SidePanel.Content>
            <ScrollableExample>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              neque elit, bibendum vel vulputate eget, iaculis in turpis.
              Aliquam efficitur cursus metus, at dapibus dui finibus quis.
              Integer commodo hendrerit nisl et viverra. Proin leo dolor,
              tincidunt ut sodales ut, pretium vitae ipsum. Pellentesque iaculis
              molestie quam, eget congue lacus imperdiet viverra. Morbi
              malesuada in augue at porttitor. Aenean finibus ex elit, eu
              ultrices mi luctus in. Nunc vitae nunc non nunc auctor aliquet
              vitae a mi. Donec rhoncus sapien quis tincidunt dignissim. Ut
              laoreet varius neque vel ornare. Vestibulum sodales risus eget
              justo vestibulum sollicitudin. Etiam dapibus, tortor et fringilla
              consequat, sapien velit placerat sapien, vel eleifend erat mauris
              vitae odio. Suspendisse aliquet erat id eleifend tincidunt.
              Curabitur mattis eros et sem laoreet lobortis. Nunc enim tortor,
              lacinia a bibendum et, facilisis sed sem. Quisque felis magna,
              tristique nec felis id, lacinia efficitur dui. Nam lacinia
              sagittis erat, at ultricies velit malesuada quis. Proin dolor
              justo, rhoncus varius turpis sit amet, fermentum egestas lorem.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Phasellus sollicitudin sodales
              lacus non pellentesque. Sed massa augue, volutpat ac accumsan non,
              suscipit a magna. Aliquam hendrerit, nulla sit amet sodales
              aliquet, neque eros placerat metus, fringilla porttitor nisl magna
              eget lectus. Phasellus quis quam nec neque porttitor tempor.
              Quisque eu faucibus odio, eget malesuada ipsum. Integer vitae
              justo nec ante eleifend porta quis nec nisi. Proin nec est
              eleifend, sodales felis ut, tincidunt erat. Mauris sed mollis
              nisl. Morbi iaculis tincidunt scelerisque. Donec a posuere magna.
              Pellentesque faucibus mi accumsan condimentum posuere. Maecenas
              posuere congue libero, vel feugiat lacus volutpat ut. Aenean
              lobortis erat quis nibh iaculis, ac eleifend ex dignissim. Mauris
              ante urna, euismod vitae dignissim non, viverra ut velit. Interdum
              et malesuada fames ac ante ipsum primis in faucibus. Sed tristique
              dolor a sem pretium euismod. Donec non aliquam purus. Orci varius
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Nullam quis tristique massa. Maecenas scelerisque
              ipsum augue. Suspendisse vulputate dapibus velit, in tincidunt
              erat molestie vel. Morbi at enim eros. Sed a varius nisi, et
              mattis massa. Ut non tellus ut mi semper pulvinar. Vestibulum id
              massa nibh. Donec porta consequat maximus. Ut mauris elit, aliquet
              mattis tincidunt non, sagittis non enim. Nullam at blandit erat.
              Vestibulum imperdiet volutpat orci, at aliquet justo ultricies at.
              Donec ac odio in sapien lacinia vestibulum eget id nisl. Duis
              posuere, nibh sed commodo pharetra, purus ante lacinia sem, et
              consequat odio sapien nec nunc. Maecenas imperdiet viverra
              suscipit. Morbi ac lacinia massa. Integer massa nisi, malesuada eu
              egestas eu, vestibulum ac ipsum. Nullam sollicitudin nunc et arcu
              consequat vehicula. Suspendisse rutrum pharetra orci, vel luctus
              mi tincidunt sit amet. Suspendisse eget sapien at ligula congue
              laoreet dapibus ut nisi. Pellentesque elementum, nunc sit amet
              ullamcorper mollis, sem velit tempus dui, sit amet euismod mauris
              ligula quis nisi. In ut purus et orci feugiat lobortis vitae in
              urna. Orci varius natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. Sed iaculis elit sed viverra
              vestibulum. Cras vitae est pharetra, finibus libero quis, sagittis
              dolor. Praesent ipsum diam, fringilla eu ipsum et, pharetra mollis
              felis. Vivamus bibendum suscipit gravida. Curabitur finibus urna
              fermentum augue condimentum sagittis. Fusce ornare a leo sed
              auctor. Etiam nisl felis, pellentesque ac diam sed, pulvinar
              efficitur purus. Curabitur ut laoreet mauris. Aenean porta
              tincidunt turpis a porttitor. Integer non tellus quis tortor
              iaculis posuere sit amet convallis orci. Ut accumsan vehicula
              nulla a blandit. Praesent justo velit, sodales quis aliquam in,
              egestas at ligula. Aliquam purus dui, consectetur non sagittis eu,
              mollis mollis justo. Nulla facilisi. Proin rhoncus diam et diam
              efficitur condimentum. Cras ornare lectus urna, in commodo nulla
              vehicula a. Proin id vulputate est. Duis sodales purus sed velit
              dapibus, vitae pellentesque turpis rhoncus. Cras ipsum nisl,
              sodales quis auctor tempus, placerat eu ex. Cras in tellus justo.
              Aliquam ex lorem, placerat eget dapibus quis, pellentesque id
              velit. Sed ultrices erat leo, sit amet condimentum ex luctus et.
              Quisque ornare est velit, vitae molestie enim rutrum sed. Fusce
              sollicitudin posuere nisl, aliquet placerat risus interdum vel.
              Integer erat mauris, blandit nec tellus in, eleifend viverra
              turpis. Aenean ac magna eget nibh malesuada suscipit. Pellentesque
              varius ac orci a facilisis. Vestibulum accumsan justo non pharetra
              varius. Ut consequat nunc consequat, egestas nibh at, pulvinar
              urna. Sed a ipsum ullamcorper, aliquam felis a, maximus magna. Sed
              iaculis quam faucibus pulvinar feugiat. In hac habitasse platea
              dictumst. Aenean laoreet ac nulla eu fringilla. Morbi augue ipsum,
              ornare at felis eu, cursus consectetur libero. Sed erat mi, semper
              et nisi nec, finibus tempor odio. Fusce a aliquet tellus. Morbi ac
              aliquam lectus. Nullam efficitur metus eu commodo lobortis.
              Praesent finibus a turpis at interdum. In hac habitasse platea
              dictumst. Nullam iaculis turpis sit amet condimentum finibus.
              Morbi ac nibh fermentum, aliquet dolor in, gravida leo. Sed
              scelerisque ipsum eu cursus ultrices. Ut nibh nibh, aliquet a
              placerat id, dignissim ut purus. Aenean cursus mi euismod aliquam
              facilisis. Donec laoreet neque vitae turpis convallis facilisis.
              Pellentesque sem quam, tempus sed lectus non, egestas sollicitudin
              massa. Quisque nulla nulla, pulvinar sit amet ultrices ac, egestas
              vitae sapien. Fusce sit amet ipsum in diam tristique vestibulum.
              Pellentesque quis risus tellus. Curabitur aliquet congue nisl vel
              sodales. Integer sodales risus aliquam, lacinia purus vel,
              sollicitudin purus. Nunc eget dolor interdum, laoreet elit non,
              tristique nunc. Quisque orci eros, vehicula quis ex a, gravida
              dignissim enim. Nullam tempus, ipsum vel fringilla sagittis, justo
              ipsum blandit nisi, quis placerat ipsum massa eget sem.
            </ScrollableExample>
          </SidePanel.Content>
        </SidePanel.Root>
      </>
    )
  },
}
