import { Heading, VStack,Field, Button,Flex, Input, HStack, RadioGroup } from '@chakra-ui/react'
import React from 'react'

const items = [
    { label: "Yes", value: "1" },
    { label: "No", value: "2" },
  ]

const SignUp = () => {
    return (
        <VStack>
            <Heading>
                Create your PopX account
            </Heading>
            <form action="">
                <Flex direction={"column"} gap={"2"} w={"md"}>

                    <Field.Root required>
                        <Field.Label className='label' color={'purple'}>Full Name<Field.RequiredIndicator /></Field.Label>
                        <Input type="text" placeholder='Marry Doe' />
                        <Field.ErrorText>This field is required</Field.ErrorText>
                    </Field.Root>
                    <Field.Root required>
                        <Field.Label className='label' color={'purple'} >Phone Number<Field.RequiredIndicator /></Field.Label>
                        <Input type="number" placeholder='Marry Doe' />
                        <Field.ErrorText>This field is required</Field.ErrorText>
                    </Field.Root> <Field.Root required>
                        <Field.Label className='label' color={'purple'}>Email address<Field.RequiredIndicator /></Field.Label>
                        <Input type="email" placeholder='Marry Doe' />
                        <Field.ErrorText>This field is required</Field.ErrorText>
                    </Field.Root>

                    <Field.Root required>
                        <Field.Label className='label' color={'purple'}>Password<Field.RequiredIndicator /></Field.Label>
                        <Input type="password" placeholder='Marry Doe' />
                        <Field.ErrorText>This field is required</Field.ErrorText>
                    </Field.Root> <Field.Root>
                        <Field.Label className='label' color={'purple'}>Company name</Field.Label>
                        <Input type="password" placeholder='Marry Doe' />
                    </Field.Root>
                    <Field.Root required>
                        <Field.Label >Are you an Agency?<Field.RequiredIndicator /></Field.Label>
                        <RadioGroup.Root defaultValue="1">
      <HStack gap="6">
        {items.map((item) => (
          <RadioGroup.Item key={item.value} value={item.value}>
            <RadioGroup.ItemHiddenInput />
            <RadioGroup.ItemIndicator colorPalette={"purple"} />
            <RadioGroup.ItemText>{item.label}</RadioGroup.ItemText>
          </RadioGroup.Item>
        ))}
      </HStack>
    </RadioGroup.Root>
    <Field.ErrorText>This field is required</Field.ErrorText>
                    </Field.Root>
                    <Button colorPalette={"purple"}
                        type='submit'>Create Account</Button>
                </Flex>

            </form>

        </VStack>

    )
}

export default SignUp
