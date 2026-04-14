-- Create user_clinics table for clinic listings
CREATE TABLE IF NOT EXISTS user_clinics (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  region VARCHAR(255) DEFAULT 'Metro Atlanta',
  address TEXT NOT NULL,
  phone VARCHAR(50) NOT NULL,
  website VARCHAR(255) DEFAULT '',
  description TEXT DEFAULT '',
  price_range VARCHAR(50) DEFAULT '$',
  hours VARCHAR(255) DEFAULT '9AM - 5PM',
  services JSONB DEFAULT '[]',
  image VARCHAR(500) DEFAULT '',
  status VARCHAR(50) DEFAULT 'approved' CHECK (status IN ('approved', 'pending', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_user_clinics_user_id ON user_clinics(user_id);
CREATE INDEX IF NOT EXISTS idx_user_clinics_status ON user_clinics(status);
CREATE INDEX IF NOT EXISTS idx_user_clinics_region ON user_clinics(region);
