'use client';

import { motion } from 'framer-motion';
import { events } from '@/content/events';
import { Calendar, Music } from 'lucide-react';

export function EventsSection() {
  return (
    <section id="arrangementer" className="py-20 sm:py-24 lg:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-condensed font-bold text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight mb-4">
            ARRANGEMENTER
          </h2>
          <p className="font-sans text-lg text-white/80 max-w-2xl mx-auto">
            Alle arrangementer er gratis og finder sted ved Grindsted Vandtårn
          </p>
        </motion.div>

        {/* Events grid */}
        <div className="space-y-6 sm:space-y-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-lg p-6 sm:p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  {/* Date */}
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-accent-yellow w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center">
                        <Calendar className="h-8 w-8 sm:h-10 sm:w-10 text-background" />
                      </div>
                    </div>
                    <div>
                      <div className="font-condensed font-bold text-2xl sm:text-3xl text-white uppercase tracking-tight">
                        {event.date}
                      </div>
                      <div className="font-sans text-sm sm:text-base text-white/70 mt-1">
                        {event.dateFull}
                      </div>
                    </div>
                  </div>

                  {/* Artist */}
                  <div className="flex items-center gap-4 sm:flex-1 sm:justify-end">
                    <div className="flex items-center gap-3">
                      <Music className="h-6 w-6 sm:h-7 sm:w-7 text-accent-yellow flex-shrink-0" />
                      <div>
                        <div className="font-condensed font-semibold text-xl sm:text-2xl md:text-3xl text-white uppercase tracking-tight">
                          {event.artist}
                        </div>
                        {event.description && (
                          <div className="font-sans text-sm text-white/70 mt-1">
                            {event.description}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="font-sans text-white/60 text-sm sm:text-base">
            Kærlig hilsen Vandtårnets Venner!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
