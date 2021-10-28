import React, { useState } from 'react';
import styled from 'styled-components';
import { Box } from '@strapi/design-system/Box';
import { Accordion, AccordionToggle, AccordionContent } from '@strapi/design-system/Accordion';
import { Stack } from '@strapi/design-system/Stack';
import { IconButton } from '@strapi/design-system/IconButton';
import { TextInput } from '@strapi/design-system/TextInput';
import User from '@strapi/icons/User';
import Pencil from '@strapi/icons/Pencil';
import Trash from '@strapi/icons/Trash';

const CustomIconButton = styled(IconButton)`
  background-color: transparent;

  svg {
    path {
      fill: ${({ theme, expanded }) => expanded ? theme.colors.primary600 : theme.colors.neutral600}
    }
  }

  &:hover {
    svg {
      path {
        fill: ${({ theme }) => theme.colors.primary600}
      }
    }
  }
`;

const DZComponent = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Box background='neutral0' shadow='tableShadow' hasRadius>
      <Accordion expanded={expanded} toggle={() => setExpanded(prev => !prev)} id="acc-1" size="S">
        <AccordionToggle
          startIcon={<User aria-hidden={true} />}
          action={
            <Stack horizontal size={0}>
              <CustomIconButton expanded={expanded} noBorder onClick={() => console.log('edit')} label="Edit" icon={<Pencil />} />
              <CustomIconButton expanded={expanded} noBorder onClick={() => console.log('delete')} label="Delete" icon={<Trash />} />
            </Stack>
          }
          title="DynamicZone"
          togglePosition="left"
        />
        <AccordionContent>
          <Stack background='neutral0' paddingTop={5} paddingBottom={5} paddingLeft={7} paddingRight={7} size={3}>
            <TextInput name='kikou' placeholder='I SAID RONRONSCELESTES' label='cat power 🐈‍⬛' />
          </Stack>
        </AccordionContent>
      </Accordion>
    </Box>
  )
};

export default DZComponent;
