import React, { useState } from 'react';
import styled from 'styled-components';
import { AccordionGroup,  Accordion, AccordionToggle, AccordionContent } from '@strapi/design-system/Accordion';
import { Flex } from '@strapi/design-system/Flex';
import { Stack } from '@strapi/design-system/Stack';
import { TextButton } from '@strapi/design-system/TextButton';
import { Tooltip } from '@strapi/design-system/Tooltip';
import { IconButton } from '@strapi/design-system/IconButton';
import { TextInput } from '@strapi/design-system/TextInput';
import Plus from '@strapi/icons/Plus';
import Earth from '@strapi/icons/Earth';
import User from '@strapi/icons/User';
import Pencil from '@strapi/icons/Pencil';
import Trash from '@strapi/icons/Trash';

const fields = [
  {
    id: 'field-1',
    label: 'yoooo',
    disabled: false,
    inputs: [
      {
        name: 'name',
        placeholder: 'michka',
        label: 'yo label'
      },
      {
        name: 'name',
        placeholder: 'des ronronscelestes 🔥',
        label: 'oy label'
      }
    ]
  },
  {
    id: 'field-2',
    label: 'yaaaa',
    disabled: true,
    inputs: [
      {
        name: 'name',
        placeholder: 'michka',
        label: 'yo label'
      },
      {
        name: 'name',
        placeholder: 'des ronronscelestes 🔥',
        label: 'oy label'
      }
    ]
  },
  {
    id: 'field-3',
    label: 'yuuuu',
    disabled: false,
    inputs: [
      {
        name: 'name',
        placeholder: 'michka',
        label: 'yo label'
      },
      {
        name: 'name',
        placeholder: 'des ronronscelestes 🔥',
        label: 'oy label'
      }
    ]
  }
]

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

const RepeatableComponent = () => {
  const [expanded, setExpanded] = useState(null);

  const handleToggle = (fieldId) => {
    if(expanded === fieldId) {
      setExpanded(null);
    } else {
      setExpanded(fieldId);
    }

  }

  return (
    <AccordionGroup
      footer={
        <Flex justifyContent="center" height="48px" background="neutral150">
          <TextButton disabled={true} startIcon={<Plus />}>
            Add an entry
          </TextButton>
        </Flex>
      }
      label="Label"
      labelAction={
        <Tooltip description="Content of the tooltip">
          <button
            aria-label="Information about the email"
            style={{
              border: 'none',
              padding: 0,
              background: 'transparent',
            }}
          >
            <Earth aria-hidden={true} />
          </button>
        </Tooltip>
      }
    >
        {fields.map(field => {
          const fieldExpanded = expanded === field.id;

          return (
            <Accordion 
              disabled={field.disabled} 
              key={field.id} 
              // expanded={fieldExpanded} 
              expanded={true} 
              toggle={() => handleToggle(field.id)} 
              id={field.id} 
              size="S"
            >
              <AccordionToggle
                startIcon={<User aria-hidden={true} />}
                action={
                  <Stack horizontal size={0}>
                    <CustomIconButton expanded={fieldExpanded} noBorder onClick={() => console.log('edit')} label="Edit" icon={<Pencil />} />
                    <CustomIconButton expanded={fieldExpanded} noBorder onClick={() => console.log('delete')} label="Delete" icon={<Trash />} />
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
        })}
    </AccordionGroup>
  )
}

export default RepeatableComponent;
