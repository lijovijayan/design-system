import React from 'react';
import { Box } from '@strapi/design-system/Box';
import { Flex } from '@strapi/design-system/Flex';
import { ContentLayout } from '@strapi/design-system/Layout';
import RepeatableComponent from './RepeatableComponent';
import DZComponent from './DZComponent';

const AccordionsCM = () => {
  return (
    <ContentLayout>
      <Flex alignItems='flex-start'>
        <Box width='70%'>
          <Box
            hasRadius 
            background='neutral0' 
            shadow='tableShadow'
            paddingLeft={7} 
            paddingRight={7} 
            paddingBottom={6} 
            paddingTop={6}
            marginBottom={10}
          >
            <RepeatableComponent />
          </Box>

          <DZComponent />
        </Box>

        <Box 
          width='30%' 
          hasRadius 
          marginLeft={8} 
          background='neutral0' 
          paddingLeft={6} 
          paddingRight={6} 
          paddingBottom={10} 
          paddingTop={6}
          shadow='tableShadow'
        >
            Information
          </Box>
      </Flex>
    </ContentLayout>
  )
};

export default AccordionsCM;
