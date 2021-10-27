import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import DropdownIcon from '@strapi/icons/CarretDown';
import styled from 'styled-components';
import { TextButton } from '../TextButton';
import { H3, P, Text } from '../Text';
import { useAccordion } from './AccordionContext';
import { Flex } from '../Flex';
import { Stack } from '../Stack';
import { Icon } from '../Icon';
import { getBackground } from './utils';

const ToggleButton = styled(TextButton)`
  text-align: left;

  svg {
    width: ${14 / 16}rem;
    height: ${14 / 16}rem;

    path {
      fill: ${({ theme, expanded }) => (expanded ? theme.colors.primary600 : theme.colors.neutral500)};
    }
  }
`;

const FlexWithSize = styled(Flex)`
  height: ${({ theme, size }) => theme.sizes.accordions[size]};
`;

export const AccordionToggle = ({ title, description, as, togglePosition, action, ...props }) => {
  const toggleButtonRef = useRef(null);
  const { toggle, expanded, id, size, variant, disabled } = useAccordion();

  // Accessibility identifiers
  const ariaControls = `accordion-content-${id}`;
  const ariaLabelId = `accordion-label-${id}`;
  const ariaDescriptionId = `accordion-desc-${id}`;

  // Style overrides
  const boxPadding = size === 'M' ? 6 : 4;
  const boxBackground = getBackground({ expanded, disabled, variant });
  const titleColor = expanded ? 'primary600' : 'neutral700';
  const descriptionColor = expanded ? 'primary600' : 'neutral600';
  const iconColor = expanded ? 'primary200' : 'neutral200';
  const iconSize = size === 'M' ? `${32 / 16}rem` : `${24 / 16}rem`;

  const handleToggle = () => {
    if (!disabled) {
      toggle();
    }
  };

  const dropdownIcon = (
    <Flex
      justifyContent="center"
      borderRadius="50%"
      height={iconSize}
      width={iconSize}
      transform={expanded ? `rotate(180deg)` : undefined}
      data-strapi-dropdown={true}
      disabled={disabled}
      aria-hidden
      as="span"
      background={iconColor}
      cursor={disabled ? 'not-allowed' : 'pointer'}
      onClick={() => toggleButtonRef?.current?.click()}
    >
      <Icon
        as={DropdownIcon}
        width={size === 'M' ? `${11 / 16}rem` : `${8 / 16}rem}`}
        color={expanded ? 'primary600' : 'neutral600'}
      />
    </Flex>
  );

  if (togglePosition === 'left') {
    return (
      <FlexWithSize
        paddingLeft={boxPadding}
        paddingRight={boxPadding}
        background={boxBackground}
        justifyContent="space-between"
        size={size}
        cursor={disabled ? 'not-allowed' : ''}
      >
        <Stack horizontal size={3} flex={1}>
          {dropdownIcon}

          <ToggleButton
            ref={toggleButtonRef}
            onClick={handleToggle}
            aria-disabled={disabled}
            aria-expanded={expanded}
            aria-controls={ariaControls}
            aria-labelledby={ariaLabelId}
            data-strapi-accordion-toggle={true}
            expanded={expanded}
            type="button"
            flex={1}
            {...props}
          >
            <>
              {size === 'S' ? (
                <Text bold={true} as={as} id={ariaLabelId} textColor={titleColor}>
                  {title}
                </Text>
              ) : (
                <H3 as={as} id={ariaLabelId} textColor={titleColor}>
                  {title}
                </H3>
              )}

              {description && (
                <P id={ariaDescriptionId} textColor={descriptionColor}>
                  {description}
                </P>
              )}
            </>
          </ToggleButton>
        </Stack>

        {action}
      </FlexWithSize>
    );
  }

  return (
    <FlexWithSize
      paddingRight={boxPadding}
      paddingLeft={boxPadding}
      background={boxBackground}
      size={size}
      justifyContent="space-between"
      cursor={disabled ? 'not-allowed' : ''}
    >
      <ToggleButton
        ref={toggleButtonRef}
        onClick={handleToggle}
        aria-disabled={disabled}
        aria-expanded={expanded}
        aria-controls={ariaControls}
        aria-labelledby={ariaLabelId}
        data-strapi-accordion-toggle={true}
        expanded={expanded}
        type="button"
        flex={1}
        {...props}
      >
        <>
          {size === 'S' ? (
            <Text bold={true} as={as} id={ariaLabelId} textColor={titleColor}>
              {title}
            </Text>
          ) : (
            <H3 as={as} id={ariaLabelId} textColor={titleColor}>
              {title}
            </H3>
          )}

          {description && (
            <P id={ariaDescriptionId} textColor={descriptionColor}>
              {description}
            </P>
          )}
        </>
      </ToggleButton>

      <Stack horizontal size={3}>
        {dropdownIcon}
        {action}
      </Stack>
    </FlexWithSize>
  );
};

AccordionToggle.defaultProps = {
  action: undefined,
  as: 'span',
  description: undefined,
  variant: 'primary',
  togglePosition: 'right',
};

AccordionToggle.propTypes = {
  action: PropTypes.node,
  as: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
  togglePosition: PropTypes.oneOf(['right', 'left']),
  variant: PropTypes.oneOf(['primary', 'secondary']),
};
