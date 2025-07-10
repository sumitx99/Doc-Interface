import { Patient, Appointment, Medicine, Prescription } from '../types';

class DataService {
  private storageKey = 'healthcare-system-data';

  private getData() {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : { patients: [], appointments: [], medicines: [], prescriptions: [] };
  }

  private saveData(data: any) {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  // Patient methods
  getPatients(): Patient[] {
    return this.getData().patients;
  }

  getPatient(id: string): Patient | undefined {
    return this.getPatients().find(p => p.id === id);
  }

  savePatient(patient: Patient): void {
    const data = this.getData();
    const existingIndex = data.patients.findIndex((p: Patient) => p.id === patient.id);
    
    if (existingIndex >= 0) {
      data.patients[existingIndex] = { ...patient, updatedAt: new Date().toISOString() };
    } else {
      data.patients.push({ ...patient, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() });
    }
    
    this.saveData(data);
  }

  deletePatient(id: string): void {
    const data = this.getData();
    data.patients = data.patients.filter((p: Patient) => p.id !== id);
    this.saveData(data);
  }

  // Appointment methods
  getAppointments(): Appointment[] {
    return this.getData().appointments;
  }

  getAppointment(id: string): Appointment | undefined {
    return this.getAppointments().find(a => a.id === id);
  }

  saveAppointment(appointment: Appointment): void {
    const data = this.getData();
    const existingIndex = data.appointments.findIndex((a: Appointment) => a.id === appointment.id);
    
    if (existingIndex >= 0) {
      data.appointments[existingIndex] = { ...appointment, updatedAt: new Date().toISOString() };
    } else {
      data.appointments.push({ ...appointment, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() });
    }
    
    this.saveData(data);
  }

  deleteAppointment(id: string): void {
    const data = this.getData();
    data.appointments = data.appointments.filter((a: Appointment) => a.id !== id);
    this.saveData(data);
  }

  // Medicine methods
  getMedicines(): Medicine[] {
    return this.getData().medicines;
  }

  getMedicine(id: string): Medicine | undefined {
    return this.getMedicines().find(m => m.id === id);
  }

  saveMedicine(medicine: Medicine): void {
    const data = this.getData();
    const existingIndex = data.medicines.findIndex((m: Medicine) => m.id === medicine.id);
    
    if (existingIndex >= 0) {
      data.medicines[existingIndex] = { ...medicine, updatedAt: new Date().toISOString() };
    } else {
      data.medicines.push({ ...medicine, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() });
    }
    
    this.saveData(data);
  }

  deleteMedicine(id: string): void {
    const data = this.getData();
    data.medicines = data.medicines.filter((m: Medicine) => m.id !== id);
    this.saveData(data);
  }

  // Prescription methods
  getPrescriptions(): Prescription[] {
    return this.getData().prescriptions;
  }

  getPrescription(id: string): Prescription | undefined {
    return this.getPrescriptions().find(p => p.id === id);
  }

  savePrescription(prescription: Prescription): void {
    const data = this.getData();
    const existingIndex = data.prescriptions.findIndex((p: Prescription) => p.id === prescription.id);
    
    if (existingIndex >= 0) {
      data.prescriptions[existingIndex] = { ...prescription, updatedAt: new Date().toISOString() };
    } else {
      data.prescriptions.push({ ...prescription, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() });
    }
    
    this.saveData(data);
  }

  deletePrescription(id: string): void {
    const data = this.getData();
    data.prescriptions = data.prescriptions.filter((p: Prescription) => p.id !== id);
    this.saveData(data);
  }

  // Initialize with sample data
  initializeSampleData(): void {
    const data = this.getData();
    
    if (data.patients.length === 0) {
      // Sample patients
      const samplePatients: Patient[] = [];

      // Sample medicines
      const sampleMedicines: Medicine[] = [];

      // Sample appointments
      const sampleAppointments: Appointment[] = [];

      // Sample prescriptions
      const samplePrescriptions: Prescription[] = [];

      this.saveData({
        patients: samplePatients,
        appointments: sampleAppointments,
        medicines: sampleMedicines,
        prescriptions: samplePrescriptions
      });
    }
  }
}

export const dataService = new DataService();