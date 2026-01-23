import postgres from 'postgres';
const sql = postgres(process.env.POSTGRES_URL, { ssl: 'require' });

async function seedStudents() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS students (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      first_name VARCHAR(255) NOT NULL,
      last_name VARCHAR(255) NOT NULL,
      grade TEXT NOT NULL,
      department TEXT
    );
  `;
}

async function seedSessions() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS sessions (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      student_id UUID REFERENCES students(id) ON DELETE CASCADE,
      estimated_time INTEGER NOT NULL,
      check_in TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      check_out TIMESTAMP
    );
  `;
}

export async function GET() {
  try {
    const result = await sql.begin((sql) => [
      // seedStudents(),
      seedSessions(),
    ]);

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}