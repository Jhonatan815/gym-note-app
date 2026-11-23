import { Dumbbell } from 'lucide-react'

function App() {
  return (
    <main className="flex min-h-svh items-center justify-center bg-surface px-6 py-12">
      <section className="w-full max-w-md rounded-card border border-border bg-surface-muted p-8 text-center">
        <span className="mx-auto flex size-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600">
          <Dumbbell aria-hidden="true" className="size-6" />
        </span>
        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-content">
          Gym Note
        </h1>
        <p className="mt-2 text-sm text-content-muted">
          Tu espacio para registrar entrenamientos y hacer seguimiento de tu
          progreso.
        </p>
      </section>
    </main>
  )
}

export default App
