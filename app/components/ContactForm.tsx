'use client';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import * as z from 'zod';
import { FieldErrors, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

const formSchema = z.object({
  name: z.string().min(2, 'El campo del nombre es obligatorio'),
  lastName: z.string().min(2, 'El campo del apellido es obligatorio'),
  email: z.string().email(),
});

export default function ContactForm() {
  const searchParams = useSearchParams();
  const service = searchParams.get('service');
  console.log(service);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      lastName: '',
      email: '',
    },
    mode: 'onChange',
  });
  console.log(form.formState.errors);
  useEffect(() => {
    const errors = form?.formState?.errors;
    const keys = Object.keys(errors);
    if (errors) {
      keys.map((e) => {
        toast.warning('Advertencia', {
          description: (errors as any)[e].message,
        });
      });
    }
  }, [form?.formState?.errors]);
  const onSubmit = () => {
    console.log('aaa');
  };
  return (
    <Card className='max-w-md w-full bg-transparent border-[1px] rounded-lg border-mountain-mist-900'>
      <CardHeader>
        <CardTitle className='text-vermilion-400'>Contacto</CardTitle>
        <CardDescription>Cotiza tu servicio</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='max-w-md w-full flex flex-col gap-4'
          >
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Nombre completo</FormLabel>
                    <FormControl>
                      <Input
                        className='bg-transparent'
                        placeholder='Escribe tu nombre...'
                        type='text'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name='lastName'
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Apellido</FormLabel>
                    <FormControl>
                      <Input
                        className='bg-transparent'
                        placeholder='Escribe tu apellido...'
                        type='text'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Correo electrónico</FormLabel>
                    <FormControl>
                      <Input
                        className='bg-transparent'
                        placeholder='Escribe tu correo...'
                        type='email'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <Button type='submit' className='w-full'>
              Enviar
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
