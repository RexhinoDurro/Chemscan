'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Camera, Calculator, BookOpen, History, FlaskConical } from 'lucide-react';

const features = [
  {
    title: 'Scan Equation',
    description: 'Point your camera at a handwritten equation',
    icon: Camera,
    href: '/scan',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Calculate',
    description: 'Enter an equation and calculate stoichiometry',
    icon: Calculator,
    href: '/calculate',
    color: 'bg-green-50 text-green-600',
  },
  {
    title: 'Reaction Library',
    description: 'Browse common reactions and examples',
    icon: BookOpen,
    href: '/calculate',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    title: 'History',
    description: 'View your past calculations',
    icon: History,
    href: '/history',
    color: 'bg-amber-50 text-amber-600',
  },
];

export default function HomePage() {
  return (
    <div className="space-y-6">
      <div className="text-center py-8">
        <FlaskConical className="h-16 w-16 text-primary-600 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-900">ChemScan</h1>
        <p className="text-gray-500 mt-2">Photomath for Chemistry</p>
        <p className="text-sm text-gray-400 mt-1">
          Scan equations, calculate stoichiometry, check safety hazards
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <Link key={feature.title} href={feature.href}>
              <Card className="h-full hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="pt-6 text-center">
                  <div className={`inline-flex p-3 rounded-full ${feature.color} mb-3`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-sm">{feature.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">{feature.description}</p>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
