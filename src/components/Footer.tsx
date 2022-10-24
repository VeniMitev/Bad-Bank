import { Anchor, Footer, Group, Text } from '@mantine/core';
import { Copyright } from 'tabler-icons-react';

export const FooterComponent = () => {
  return (
    <Footer height={40} p='xs'>          
        <Group>
            <Copyright 
              size={20}
              strokeWidth={1.5}
              color={'black'}
            />
            <Text>
                Veni Mitev 2022
            </Text>
            <Anchor 
                href="https://venimitev.dev" 
                target='_blank'
            >
                venimitev.dev
            </Anchor>
            <Anchor 
                href="https://github.com/VeniMitev/Bad-Bank"  
                target='_blank'
            >
                github repo for this project
            </Anchor>
        </Group>          
    </Footer>
  )
}
