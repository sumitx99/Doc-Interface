import React, { useState } from 'react';
import { Plus, Search, Edit, Trash2, Pill, AlertTriangle, Package } from 'lucide-react';
import { Medicine } from '../types';
import { dataService } from '../services/dataService';

const MedicineManagement: React.FC = () => {
  const [medicines, setMedicines] = useState<Medicine[]>(dataService.getMedicines());
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingMedicine, setEditingMedicine] = useState<Medicine | null>(null);
  const [formData, setFormData] = useState<Partial<Medicine>>({
    name: '',
    dosage: '',
    frequency: '',
    instructions: '',
    sideEffects: [],
    category: '',
    manufacturer: '',
    expiryDate: '',
    stockQuantity: 0
  });

  const filteredMedicines = medicines.filter(medicine =>
    medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    medicine.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    medicine.manufacturer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const medicine: Medicine = {
      id: editingMedicine?.id || Date.now().toString(),
      name: formData.name || '',
      dosage: formData.dosage || '',
      frequency: formData.frequency || '',
      instructions: formData.instructions || '',
      sideEffects: formData.sideEffects || [],
      category: formData.category || '',
      manufacturer: formData.manufacturer || '',
      expiryDate: formData.expiryDate || '',
      stockQuantity: formData.stockQuantity || 0,
      createdAt: editingMedicine?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    dataService.saveMedicine(medicine);
    setMedicines(dataService.getMedicines());
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: '',
      dosage: '',
      frequency: '',
      instructions: '',
      sideEffects: [],
      category: '',
      manufacturer: '',
      expiryDate: '',
      stockQuantity: 0
    });
    setEditingMedicine(null);
    setShowForm(false);
  };

  const handleEdit = (medicine: Medicine) => {
    setEditingMedicine(medicine);
    setFormData(medicine);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this medicine?')) {
      dataService.deleteMedicine(id);
      setMedicines(dataService.getMedicines());
    }
  };

  const handleSideEffectsChange = (value: string) => {
    const sideEffects = value.split(',').map(s => s.trim()).filter(s => s);
    setFormData({ ...formData, sideEffects });
  };

  const isExpiringSoon = (expiryDate: string) => {
    const expiry = new Date(expiryDate);
    const today = new Date();
    const monthsToExpiry = (expiry.getTime() - today.getTime()) / (1000 * 60 * 60 * 24 * 30);
    return monthsToExpiry < 6;
  };

  const isLowStock = (quantity: number) => {
    return quantity < 20;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-900">Medicine Management</h2>
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors"
        >
          <Plus className="h-4 w-4" />
          <span>Add Medicine</span>
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search medicines..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Medicine Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-medium mb-4">
              {editingMedicine ? 'Edit Medicine' : 'Add New Medicine'}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Medicine Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Dosage</label>
                  <input
                    type="text"
                    required
                    value={formData.dosage}
                    onChange={(e) => setFormData({ ...formData, dosage: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Frequency</label>
                  <input
                    type="text"
                    required
                    value={formData.frequency}
                    onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <input
                    type="text"
                    required
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Instructions</label>
                <textarea
                  required
                  value={formData.instructions}
                  onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Side Effects (comma-separated)</label>
                <input
                  type="text"
                  value={formData.sideEffects?.join(', ')}
                  onChange={(e) => handleSideEffectsChange(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Manufacturer</label>
                  <input
                    type="text"
                    required
                    value={formData.manufacturer}
                    onChange={(e) => setFormData({ ...formData, manufacturer: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                  <input
                    type="date"
                    required
                    value={formData.expiryDate}
                    onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Stock Quantity</label>
                <input
                  type="number"
                  required
                  min="0"
                  value={formData.stockQuantity}
                  onChange={(e) => setFormData({ ...formData, stockQuantity: parseInt(e.target.value) })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  {editingMedicine ? 'Update Medicine' : 'Add Medicine'}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Medicine List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMedicines.map((medicine) => (
          <div key={medicine.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 rounded-full p-2">
                  <Pill className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{medicine.name}</h3>
                  <p className="text-sm text-gray-600">{medicine.category}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(medicine)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <Edit className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleDelete(medicine.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Dosage:</span>
                <span className="text-sm font-medium">{medicine.dosage}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Frequency:</span>
                <span className="text-sm font-medium">{medicine.frequency}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Manufacturer:</span>
                <span className="text-sm font-medium">{medicine.manufacturer}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Expiry:</span>
                <span className={`text-sm font-medium ${isExpiringSoon(medicine.expiryDate) ? 'text-red-600' : 'text-gray-900'}`}>
                  {medicine.expiryDate}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Package className="h-4 w-4 text-gray-400" />
                <span className={`text-sm font-medium ${isLowStock(medicine.stockQuantity) ? 'text-red-600' : 'text-gray-900'}`}>
                  {medicine.stockQuantity} units
                </span>
              </div>
              {(isLowStock(medicine.stockQuantity) || isExpiringSoon(medicine.expiryDate)) && (
                <div className="flex space-x-1">
                  {isLowStock(medicine.stockQuantity) && (
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs flex items-center">
                      <AlertTriangle className="h-3 w-3 mr-1" />
                      Low Stock
                    </span>
                  )}
                  {isExpiringSoon(medicine.expiryDate) && (
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs flex items-center">
                      <AlertTriangle className="h-3 w-3 mr-1" />
                      Expiring
                    </span>
                  )}
                </div>
              )}
            </div>

            {medicine.instructions && (
              <div className="mt-3 p-3 bg-blue-50 rounded-md">
                <p className="text-xs text-blue-800">{medicine.instructions}</p>
              </div>
            )}

            {medicine.sideEffects && medicine.sideEffects.length > 0 && (
              <div className="mt-3">
                <p className="text-xs text-gray-500 mb-1">Side Effects:</p>
                <div className="flex flex-wrap gap-1">
                  {medicine.sideEffects.map((effect, index) => (
                    <span key={index} className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">
                      {effect}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicineManagement;