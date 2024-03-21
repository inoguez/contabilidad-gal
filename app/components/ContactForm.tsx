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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z
  .object({
    name: z.string().min(1, 'El campo del nombre es obligatorio'),
    lastName: z.string().min(1, 'El campo del apellido es obligatorio'),
    email: z.string().email('El campo del email es obligatorio'),
    regimen: z.enum(['Persona física', 'Persona moral']),
    company: z.string().optional(),
    additionalInfo: z
      .string()
      .min(1, 'Proporciona mas información adicional de lo que necesitas :)'),
  })
  .refine(
    (data) => {
      if (data.regimen === 'Persona moral') {
        return !!data.company;
      }
      return true;
    },
    { message: 'Escribe el nombre de tu empresa', path: ['company'] }
  );
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

  const regimenType = form.watch('regimen');
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
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values });
    toast.success('Se envió el formulario de contacto correctamente');
  };
  return (
    <Card className='max-w-md w-full bg-transparent border-[1px] rounded-lg border-mountain-mist-900 h-fit'>
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
            <FormField
              control={form.control}
              name='regimen'
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Régimen fiscal</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger className='bg-transparent'>
                          <SelectValue placeholder='Selecciona un regimen' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value='Persona física'>
                          Persona física
                        </SelectItem>
                        <SelectItem value='Persona moral'>
                          Persona moral
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            {regimenType === 'Persona moral' && (
              <FormField
                control={form.control}
                name='company'
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Empresa (Persona moral)</FormLabel>
                      <FormControl>
                        <Input
                          className='bg-transparent'
                          placeholder='Escribe el nombre de tu empresa...'
                          type='text'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            )}
            <FormField
              control={form.control}
              name='additionalInfo'
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Información adicional</FormLabel>
                    <FormControl>
                      <Textarea
                        className='bg-transparent'
                        placeholder='Escribe información adicional de la solución que necesitas cubrir'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <Button
              type='submit'
              className='w-full bg-vermilion-400 text-vermilion-100 font-medium hover:bg-mountain-mist-950'
            >
              Enviar
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
