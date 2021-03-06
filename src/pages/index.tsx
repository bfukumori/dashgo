import { Button, Flex, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useRouter } from "next/router";

type SignInFormData = {
  email: string;
  password: string;
}

const signFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória")
})

export default function SignIn() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignInFormData>({
    resolver: yupResolver(signFormSchema)
  });
  const router = useRouter();

  const handleSignIn = handleSubmit(async data => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    router.push('/dashboard')
  })
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex as="form" w="100%" maxW={360} bg="gray.800" p="8" borderRadius={8} flexDir="column" onSubmit={handleSignIn}>
        <Stack
          spacing={4}>
          <Input
            type="email"
            label="Email"
            error={errors.email}
            {...register("email")}
          />
          <Input
            type="password"
            label="Senha"
            error={errors.password}
            {...register("password")}
          />
        </Stack>
        <Button type="submit" mt={6} colorScheme="pink" size="lg" isLoading={isSubmitting}>Entrar</Button>
      </Flex>
    </Flex >
  )
}
