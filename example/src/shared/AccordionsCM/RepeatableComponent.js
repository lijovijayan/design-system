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
import Trash from '@strapi/icons/Trash';
import Drag from '@strapi/icons/Drag';

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
  },
  {
    id: 'field-4',
    label: 'yeeee',
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
];

const TextButtonCustom = styled(TextButton)`
  height: 100%;
  width: 100%;
  border-radius: 0 0 4px 4px;
  display: flex;
  justify-content: center;
  span {
    font-weight: 600;
    font-size: 14px;
  }
`;

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
  const [myFields, setMyFields] = useState(fields);

  const randomNumber = () => {
    return Math.round(Math.random() * 1000);
  };

  const handleAddEntry = () => {
    const id = `field-${randomNumber()}`;
    setMyFields(prev => [...myFields, {
      id,
      label: 'bonjour',
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
    }]);
    setExpanded(id);
  }

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
        <Flex justifyContent="center" height="48px" background="neutral0" hasRadius>
          <TextButtonCustom onClick={handleAddEntry} startIcon={<Plus />}>
            Add an entry
          </TextButtonCustom>
        </Flex>
      }
      label="Rep component"
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
        {myFields.map(field => {
          const fieldExpanded = expanded === field.id;

          return (
            <Accordion 
              disabled={field.disabled} 
              key={field.id} 
              expanded={fieldExpanded} 
              toggle={() => handleToggle(field.id)} 
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
        })}
    </AccordionGroup>
  )
}

export default RepeatableComponent;
