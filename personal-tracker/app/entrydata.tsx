'use client'

import {useState} from "react";
import { redirect } from "next/navigation";
import { z } from 'zod';

const createEntryForm = z.object({
    date: z.string(),
    time: z.string(),
    duration: z.string(),
    type: z.string(),
    intensity: z.string(),
    soreness: z.string(),
    notes: z.string(),
  });

  export async function createEntry(formData: FormData) {

  const {date, time, duration, type, intensity, soreness, notes} = createEntryForm.parse({
    date: formData.get('date'),
    time: formData.get('time'),
    duration: formData.get('duration'),
    type: formData.get('type'),
    intensity: formData.get('intensity'),
    soreness: formData.get('soreness'),
    notes: formData.get('notes'),
  })

    redirect('/?' + "date=" + date + "&time=" + time + "&duration=" + duration + "&type=" + type + "&intensity=" + intensity + "&soreness=" + soreness + "&notes=" + notes);

  }