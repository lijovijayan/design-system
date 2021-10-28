import React, { useState } from 'react';
import styled from 'styled-components';
import { AccordionGroup } from '@strapi/design-system/Accordion';
import { Flex } from '@strapi/design-system/Flex';
import { TextButton } from '@strapi/design-system/TextButton';
import { Tooltip } from '@strapi/design-system/Tooltip';
import Plus from '@strapi/icons/Plus';
import Earth from '@strapi/icons/Earth';
import AccordionRepComponent from './AccordionRepComponent';

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
          <AccordionRepComponent key={field.id} field={field} fieldExpanded={fieldExpanded} onToggle={handleToggle} />
        ) 
      })}
    </AccordionGroup>
  )
}

export default RepeatableComponent;
