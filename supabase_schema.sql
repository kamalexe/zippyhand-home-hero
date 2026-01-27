
-- Create services table
create table if not exists services (
  id bigint primary key generated always as identity,
  title text not null,
  description text,
  price text,
  popular boolean default false,
  icon text
);

-- Create bookings table
create table if not exists bookings (
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

-- Policies for services
drop policy if exists "Public services select" on services;
create policy "Public services select" on services for select using (true);

drop policy if exists "Admin services insert" on services;
create policy "Admin services insert" on services for insert with check (true);

drop policy if exists "Admin services update" on services;
create policy "Admin services update" on services for update using (true);

drop policy if exists "Admin services delete" on services;
create policy "Admin services delete" on services for delete using (true);

-- Policies for bookings
drop policy if exists "Public bookings insert" on bookings;
create policy "Public bookings insert" on bookings for insert with check (true);

drop policy if exists "Admin bookings select" on bookings;
create policy "Admin bookings select" on bookings for select using (true);

drop policy if exists "Admin bookings update" on bookings;
create policy "Admin bookings update" on bookings for update using (true);

drop policy if exists "Admin bookings delete" on bookings;
create policy "Admin bookings delete" on bookings for delete using (true);

-- Insert default services (Extended)
insert into services (title, description, price, popular, icon) values
  ('AC Repair & Maintenance', 'Complete cooling solutions - noise issues, cooling problems, and regular maintenance', 'Starting ₹299', true, 'Wrench'),
  ('AC Installation', 'Safe and professional AC setup with proper handling and testing', 'Starting ₹499', false, 'Snowflake'),
  ('Fix AC Water Leaking', 'Stop annoying drips and water damage with expert leak repairs', 'Starting ₹249', false, 'Droplets'),
  ('AC Gas Charging', 'Restore your AC''s cooling efficiency with proper refrigerant refill', 'Starting ₹1,499', true, 'Wind'),
  ('Washing Machine Repair', 'All brands serviced - drum issues, motor problems, and more', 'Starting ₹349', false, 'WashingMachine'),
  ('RO Repair & Service', 'Ensure pure drinking water with filter replacement and repairs', 'Starting ₹199', false, 'GlassWater'),
  ('Refrigerator Repair', 'Fixing cooling issues, gas leaks, and compressor problems', 'Starting ₹399', true, 'Snowflake'),
  ('Microwave Repair', 'Professional repair for heating issues and electrical faults', 'Starting ₹299', false, 'Wrench'),
  ('Geyser Repair', 'Fixing heating elements and thermostat issues for hot water', 'Starting ₹249', false, 'Wind'),
  ('Chimney Cleaning', 'Complete deep cleaning and maintenance for kitchen chimneys', 'Starting ₹599', false, 'Droplets');
