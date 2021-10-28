import React from 'react';
import styled from 'styled-components';
import { useDrag, useDrop } from "react-dnd";
import {  Accordion, AccordionToggle, AccordionContent } from '@strapi/design-system/Accordion';
import { Stack } from '@strapi/design-system/Stack';
import { TextInput } from '@strapi/design-system/TextInput';
import { IconButton } from '@strapi/design-system/IconButton';
import User from '@strapi/icons/User';
import Trash from '@strapi/icons/Trash';
import Drag from '@strapi/icons/Drag';

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

const AccordionRepComponent = ({ field, fieldExpanded, onToggle }) => {
  return (
    <Accordion 
      disabled={field.disabled} 
      key={field.id} 
      expanded={fieldExpanded} 
      toggle={() => onToggle(field.id)} 
      id={field.id} 
      size="S"
    >
      <AccordionToggle
        startIcon={<User aria-hidden={true} />}
        action={
          <Stack horizontal size={0}>
            <CustomIconButton 
              expanded={fieldExpanded} 
              noBorder 
              onClick={() => console.log('delete')} 
              label="Delete" 
              icon={<Trash />} 
              disabled={field.disabled}
            />
            <CustomIconButton
              expanded={fieldExpanded} 
              noBorder 
              onClick={() => console.log('drag')} 
              label="Drag" 
              icon={<Drag />} 
              disabled={field.disabled}
            />
          </Stack>
        }
        title={field.label}
        togglePosition="left"
      />
      <AccordionContent>
        <Stack background='neutral100' paddingTop={5} paddingBottom={5} paddingLeft={7} paddingRight={7} size={3}>
          {field.inputs.map(input => (
            <TextInput key={input.label} name={input.name} placeholder={input.placeholder} label={input.label} />
          ))}
        </Stack>
      </AccordionContent>
    </Accordion>
  )
}

export default AccordionRepComponent
