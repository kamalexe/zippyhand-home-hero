-- Create services table
create table services (
  id bigint primary key generated always as identity,
  title text not null,
  description text,
  price text,
  popular boolean default false,
  icon text
);

-- Create bookings table
create table bookings (
  id bigint primary key generated always as identity,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  phone text not null,
  service text,
  brand text,
  date text,
  time_slot text,
  address text,
  landmark text,
  status text default 'pending'
);

-- Enable RLS
alter table services enable row level security;
alter table bookings enable row level security;

-- Policies
create policy "Public services" on services for select using (true);
create policy "Public bookings" on bookings for insert with check (true);

-- Insert default services (from your current code)
insert into services (title, description, price, popular, icon) values
  ('AC Repair & Maintenance', 'Complete cooling solutions - noise issues, cooling problems, and regular maintenance', 'Starting ₹299', true, 'Wrench'),
  ('AC Installation / Uninstallation', 'Safe and professional AC setup or removal with proper handling', 'Starting ₹499', false, 'Snowflake'),
  ('Fix AC Water Leaking', 'Stop annoying drips and water damage with expert leak repairs', 'Starting ₹249', false, 'Droplets'),
  ('AC Gas Charging', 'Restore your AC''s cooling efficiency with proper refrigerant refill', 'Starting ₹1,499', true, 'Wind'),
  ('Washing Machine Repair', 'All brands serviced - drum issues, motor problems, and more', 'Starting ₹349', false, 'WashingMachine'),
  ('RO Repair & Service', 'Ensure pure drinking water with filter replacement and repairs', 'Starting ₹199', false, 'GlassWater');
