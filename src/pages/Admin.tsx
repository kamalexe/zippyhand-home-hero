
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    ArrowLeft,
    RefreshCw,
    Plus,
    Trash2,
    LogOut,
    LayoutDashboard,
    ClipboardList,
    Settings,
    CheckCircle2,
    Clock,
    XCircle,
    Edit2,
    ChevronDown
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Admin = () => {
    const navigate = useNavigate();
    const { toast } = useToast();
    const [isAddServiceOpen, setIsAddServiceOpen] = useState(false);
    const [isEditServiceOpen, setIsEditServiceOpen] = useState(false);
    const [editingService, setEditingService] = useState<any>(null);
    const [newService, setNewService] = useState({
        title: "",
        description: "",
        price: "",
        icon: "Wrench",
        popular: false,
    });

    // Bookings Query
    const { data: bookings = [], isLoading: isLoadingBookings, refetch: refetchBookings, isFetching: isFetchingBookings } = useQuery({
        queryKey: ['admin-bookings'],
        queryFn: async () => {
            const { data, error } = await supabase
                .from('bookings')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            return data;
        },
    });

    // Services Query
    const { data: services = [], isLoading: isLoadingServices, refetch: refetchServices, isFetching: isFetchingServices } = useQuery({
        queryKey: ['admin-services'],
        queryFn: async () => {
            const { data, error } = await supabase
                .from('services')
                .select('*')
                .order('id');

            if (error) throw error;
            return data;
        },
    });

    const handleAddService = async () => {
        try {
            const { error } = await supabase
                .from('services')
                .insert([newService]);

            if (error) throw error;

            toast({ title: "Service Added", description: "New service has been successfully created." });
            setIsAddServiceOpen(false);
            setNewService({ title: "", description: "", price: "", icon: "Wrench", popular: false });
            refetchServices();
        } catch (error: any) {
            toast({ title: "Error", description: error.message, variant: "destructive" });
        }
    };

    const handleUpdateService = async () => {
        try {
            const { error } = await supabase
                .from('services')
                .update({
                    title: editingService.title,
                    description: editingService.description,
                    price: editingService.price,
                    popular: editingService.popular,
                    icon: editingService.icon
                })
                .eq('id', editingService.id);

            if (error) throw error;

            toast({ title: "Service Updated" });
            setIsEditServiceOpen(false);
            setEditingService(null);
            refetchServices();
        } catch (error: any) {
            toast({ title: "Error", description: error.message, variant: "destructive" });
        }
    };

    const handleDeleteService = async (id: number) => {
        if (!confirm("Are you sure you want to delete this service?")) return;
        try {
            const { error } = await supabase
                .from('services')
                .delete()
                .eq('id', id);

            if (error) throw error;
            toast({ title: "Service Deleted" });
            refetchServices();
        } catch (error: any) {
            toast({ title: "Error", description: error.message, variant: "destructive" });
        }
    };

    const handleUpdateBookingStatus = async (id: number, status: string) => {
        try {
            const { error } = await supabase
                .from('bookings')
                .update({ status })
                .eq('id', id);

            if (error) throw error;
            toast({ title: "Status Updated", description: `Booking marked as ${status}` });
            refetchBookings();
        } catch (error: any) {
            toast({ title: "Error", description: error.message, variant: "destructive" });
        }
    };

    const handleDeleteBooking = async (id: number) => {
        if (!confirm("Are you sure you want to delete this booking record?")) return;
        try {
            const { error } = await supabase
                .from('bookings')
                .delete()
                .eq('id', id);

            if (error) throw error;
            toast({ title: "Booking Deleted" });
            refetchBookings();
        } catch (error: any) {
            toast({ title: "Error", description: error.message, variant: "destructive" });
        }
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate("/login");
    };

    // Calculate stats
    const stats = {
        totalBookings: bookings.length,
        pendingBookings: bookings.filter((b: any) => b.status === 'pending').length,
        completedBookings: bookings.filter((b: any) => b.status === 'completed').length,
        activeServices: services.length
    };

    return (
        <div className="min-h-screen bg-slate-50/50 p-4 md:p-8">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-xl text-primary">
                            <LayoutDashboard className="w-6 h-6" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight text-slate-900">Admin Dashboard</h1>
                            <p className="text-slate-500 text-sm">Manage your services and customer bookings</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" onClick={() => navigate('/')} className="gap-2">
                            <ArrowLeft className="w-4 h-4" /> View Site
                        </Button>
                        <Button variant="ghost" size="sm" onClick={handleLogout} className="text-destructive hover:text-destructive hover:bg-destructive/10 gap-2">
                            <LogOut className="w-4 h-4" /> Logout
                        </Button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card className="border-none shadow-sm h-full">
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardTitle className="text-sm font-medium text-slate-500">Total Bookings</CardTitle>
                            <ClipboardList className="w-4 h-4 text-primary" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold">{stats.totalBookings}</div>
                            <p className="text-xs text-slate-400 mt-1">Overall requests received</p>
                        </CardContent>
                    </Card>
                    <Card className="border-none shadow-sm h-full">
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardTitle className="text-sm font-medium text-slate-500">Pending</CardTitle>
                            <Clock className="w-4 h-4 text-amber-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold">{stats.pendingBookings}</div>
                            <p className="text-xs text-slate-400 mt-1">Requires attention</p>
                        </CardContent>
                    </Card>
                    <Card className="border-none shadow-sm h-full">
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardTitle className="text-sm font-medium text-slate-500">Completed</CardTitle>
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold">{stats.completedBookings}</div>
                            <p className="text-xs text-slate-400 mt-1">Successfully served</p>
                        </CardContent>
                    </Card>
                    <Card className="border-none shadow-sm h-full">
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardTitle className="text-sm font-medium text-slate-500">Active Services</CardTitle>
                            <Settings className="w-4 h-4 text-blue-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold">{stats.activeServices}</div>
                            <p className="text-xs text-slate-400 mt-1">Current offerings</p>
                        </CardContent>
                    </Card>
                </div>

                <Tabs defaultValue="bookings" className="space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <TabsList className="bg-white border border-slate-100 p-1">
                            <TabsTrigger value="bookings" className="data-[state=active]:bg-primary data-[state=active]:text-white uppercase text-[10px] font-bold tracking-widest px-6">Bookings</TabsTrigger>
                            <TabsTrigger value="services" className="data-[state=active]:bg-primary data-[state=active]:text-white uppercase text-[10px] font-bold tracking-widest px-6">Services</TabsTrigger>
                        </TabsList>

                        <div className="flex items-center gap-2">
                            <TabsContent value="bookings" className="m-0">
                                <Button
                                    variant="outline"
                                    onClick={() => refetchBookings()}
                                    disabled={isFetchingBookings}
                                    className="gap-2 bg-white"
                                    size="sm"
                                >
                                    <RefreshCw className={`w-3.5 h-3.5 ${isFetchingBookings ? 'animate-spin' : ''}`} />
                                    Refresh Bookings
                                </Button>
                            </TabsContent>

                            <TabsContent value="services" className="m-0">
                                <div className="flex gap-2">
                                    <Dialog open={isAddServiceOpen} onOpenChange={setIsAddServiceOpen}>
                                        <DialogTrigger asChild>
                                            <Button size="sm" className="gap-2">
                                                <Plus className="w-3.5 h-3.5" /> Add Service
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-[425px]">
                                            <DialogHeader>
                                                <DialogTitle>Add New Service</DialogTitle>
                                                <DialogDescription>Fill in the details for the new service offering.</DialogDescription>
                                            </DialogHeader>
                                            <div className="space-y-4 py-4">
                                                <div className="space-y-2">
                                                    <Label>Title</Label>
                                                    <Input autoFocus value={newService.title} onChange={e => setNewService({ ...newService, title: e.target.value })} placeholder="e.g. AC Repair" />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label>Description</Label>
                                                    <Input value={newService.description} onChange={e => setNewService({ ...newService, description: e.target.value })} placeholder="Service details..." />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label>Price Text</Label>
                                                    <Input value={newService.price} onChange={e => setNewService({ ...newService, price: e.target.value })} placeholder="e.g. Starting ₹299" />
                                                </div>
                                                <div className="flex items-center space-x-2 pt-2">
                                                    <input
                                                        type="checkbox"
                                                        id="popular"
                                                        className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary"
                                                        checked={newService.popular}
                                                        onChange={e => setNewService({ ...newService, popular: e.target.checked })}
                                                    />
                                                    <Label htmlFor="popular" className="font-medium">Mark as Popular</Label>
                                                </div>
                                            </div>
                                            <DialogFooter>
                                                <Button className="w-full" onClick={handleAddService}>Save Service</Button>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                    <Button
                                        variant="outline"
                                        onClick={() => refetchServices()}
                                        disabled={isFetchingServices}
                                        className="gap-2 bg-white"
                                        size="sm"
                                    >
                                        <RefreshCw className={`w-3.5 h-3.5 ${isFetchingServices ? 'animate-spin' : ''}`} />
                                        Refresh
                                    </Button>
                                </div>
                            </TabsContent>
                        </div>
                    </div>

                    <TabsContent value="bookings" className="mt-0">
                        <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
                            {isLoadingBookings ? (
                                <div className="p-12 text-center text-slate-400 flex flex-col items-center gap-3">
                                    <RefreshCw className="w-8 h-8 animate-spin opacity-20" />
                                    Loading bookings...
                                </div>
                            ) : bookings.length === 0 ? (
                                <div className="p-20 text-center text-slate-400 flex flex-col items-center gap-3">
                                    <div className="p-4 bg-slate-50 rounded-full mb-2">
                                        <ClipboardList className="w-8 h-8 opacity-20" />
                                    </div>
                                    <p className="font-medium">No bookings found</p>
                                    <p className="text-sm">When customers book services, they will appear here.</p>
                                </div>
                            ) : (
                                <div className="overflow-x-auto">
                                    <Table>
                                        <TableHeader className="bg-slate-50/50">
                                            <TableRow>
                                                <TableHead className="font-bold py-4">Date/Time</TableHead>
                                                <TableHead className="font-bold py-4">Customer</TableHead>
                                                <TableHead className="font-bold py-4">Service</TableHead>
                                                <TableHead className="font-bold py-4">Brand</TableHead>
                                                <TableHead className="font-bold py-4">Schedule</TableHead>
                                                <TableHead className="font-bold py-4">Status</TableHead>
                                                <TableHead className="font-bold text-right py-4 pr-6">Actions</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {bookings.map((booking: any) => (
                                                <TableRow key={booking.id} className="hover:bg-slate-50/50 transition-colors">
                                                    <TableCell className="text-xs text-slate-500 align-top py-4">
                                                        {new Date(booking.created_at).toLocaleDateString()}<br />
                                                        {new Date(booking.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                    </TableCell>
                                                    <TableCell className="align-top py-4">
                                                        <div className="font-semibold text-slate-900">{booking.name}</div>
                                                        <div className="text-xs text-slate-500 font-medium">{booking.phone}</div>
                                                        <div className="text-[10px] text-slate-400 mt-1 max-w-[200px] leading-relaxed">
                                                            {booking.address}
                                                            {booking.landmark && <span className="block italic mt-0.5">Near: {booking.landmark}</span>}
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="align-top py-4">
                                                        <Badge variant="outline" className="font-bold text-primary border-primary/20 bg-primary/5">
                                                            {booking.service}
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell className="align-top py-4 font-medium">{booking.brand}</TableCell>
                                                    <TableCell className="align-top py-4">
                                                        <div className="text-sm font-semibold">{booking.date}</div>
                                                        <div className="text-xs text-slate-500">{booking.time_slot}</div>
                                                    </TableCell>
                                                    <TableCell className="align-top py-4">
                                                        <DropdownMenu>
                                                            <DropdownMenuTrigger asChild>
                                                                <Button variant="ghost" size="sm" className="h-8 gap-2 px-3 border border-slate-100 bg-slate-50">
                                                                    <div className={`w-2 h-2 rounded-full ${booking.status === 'completed' ? 'bg-emerald-500' :
                                                                            booking.status === 'cancelled' ? 'bg-rose-500' : 'bg-amber-500'
                                                                        }`} />
                                                                    <span className="capitalize text-xs font-bold">{booking.status}</span>
                                                                    <ChevronDown className="w-3 h-3 text-slate-400" />
                                                                </Button>
                                                            </DropdownMenuTrigger>
                                                            <DropdownMenuContent align="end">
                                                                <DropdownMenuItem onClick={() => handleUpdateBookingStatus(booking.id, 'pending')} className="gap-2">
                                                                    <div className="w-2 h-2 rounded-full bg-amber-500" /> Pending
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem onClick={() => handleUpdateBookingStatus(booking.id, 'completed')} className="gap-2">
                                                                    <div className="w-2 h-2 rounded-full bg-emerald-500" /> Completed
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem onClick={() => handleUpdateBookingStatus(booking.id, 'cancelled')} className="gap-2 text-destructive">
                                                                    <div className="w-2 h-2 rounded-full bg-rose-500" /> Cancelled
                                                                </DropdownMenuItem>
                                                            </DropdownMenuContent>
                                                        </DropdownMenu>
                                                    </TableCell>
                                                    <TableCell className="align-top py-4 pr-6 text-right">
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            onClick={() => handleDeleteBooking(booking.id)}
                                                            className="h-8 w-8 text-slate-300 hover:text-destructive hover:bg-rose-50 transition-all rounded-lg"
                                                            title="Delete Booking"
                                                        >
                                                            <Trash2 className="w-4 h-4" />
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                            )}
                        </div>
                    </TabsContent>

                    <TabsContent value="services" className="mt-0">
                        <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
                            {isLoadingServices ? (
                                <div className="p-12 text-center text-slate-400 flex flex-col items-center gap-3">
                                    <RefreshCw className="w-8 h-8 animate-spin opacity-20" />
                                    Loading services...
                                </div>
                            ) : services.length === 0 ? (
                                <div className="p-20 text-center text-slate-400 flex flex-col items-center gap-3">
                                    <div className="p-4 bg-slate-50 rounded-full mb-2">
                                        <Settings className="w-8 h-8 opacity-20" />
                                    </div>
                                    <p className="font-medium">No services found</p>
                                    <Button size="sm" variant="outline" onClick={() => setIsAddServiceOpen(true)} className="mt-2">
                                        Add your first service
                                    </Button>
                                </div>
                            ) : (
                                <div className="overflow-x-auto">
                                    <Table>
                                        <TableHeader className="bg-slate-50/50">
                                            <TableRow>
                                                <TableHead className="font-bold py-4 pl-6">Service</TableHead>
                                                <TableHead className="font-bold py-4">Description</TableHead>
                                                <TableHead className="font-bold py-4 text-center">Price</TableHead>
                                                <TableHead className="font-bold py-4 text-center">Popular</TableHead>
                                                <TableHead className="font-bold text-right py-4 pr-6">Actions</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {services.map((service: any) => (
                                                <TableRow key={service.id} className="hover:bg-slate-50/50 transition-colors">
                                                    <TableCell className="py-4 pl-6">
                                                        <div className="flex items-center gap-3">
                                                            <div className="p-2.5 bg-slate-100 rounded-lg text-slate-600">
                                                                <Settings className="w-4 h-4" />
                                                            </div>
                                                            <span className="font-bold text-slate-900 whitespace-nowrap">{service.title}</span>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="py-4">
                                                        <p className="text-sm text-slate-500 max-w-sm line-clamp-1" title={service.description}>
                                                            {service.description}
                                                        </p>
                                                    </TableCell>
                                                    <TableCell className="py-4 text-center">
                                                        <span className="text-sm font-bold text-primary">{service.price}</span>
                                                    </TableCell>
                                                    <TableCell className="py-4 text-center">
                                                        {service.popular ? (
                                                            <Badge className="bg-emerald-50 text-emerald-600 border-none">Active</Badge>
                                                        ) : (
                                                            <span className="text-slate-300 text-xs">-</span>
                                                        )}
                                                    </TableCell>
                                                    <TableCell className="py-4 pr-6 text-right">
                                                        <div className="flex justify-end gap-1">
                                                            <Button
                                                                variant="ghost"
                                                                size="icon"
                                                                onClick={() => {
                                                                    setEditingService(service);
                                                                    setIsEditServiceOpen(true);
                                                                }}
                                                                className="h-8 w-8 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-lg"
                                                            >
                                                                <Edit2 className="w-3.5 h-3.5" />
                                                            </Button>
                                                            <Button
                                                                variant="ghost"
                                                                size="icon"
                                                                onClick={() => handleDeleteService(service.id)}
                                                                className="h-8 w-8 text-slate-400 hover:text-destructive hover:bg-rose-50 rounded-lg"
                                                            >
                                                                <Trash2 className="w-3.5 h-3.5" />
                                                            </Button>
                                                        </div>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                            )}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>

            {/* Edit Service Dialog */}
            <Dialog open={isEditServiceOpen} onOpenChange={setIsEditServiceOpen}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Edit Service</DialogTitle>
                        <DialogDescription>Update the details for this service offering.</DialogDescription>
                    </DialogHeader>
                    {editingService && (
                        <div className="space-y-4 py-4">
                            <div className="space-y-2">
                                <Label>Title</Label>
                                <Input value={editingService.title} onChange={e => setEditingService({ ...editingService, title: e.target.value })} />
                            </div>
                            <div className="space-y-2">
                                <Label>Description</Label>
                                <Input value={editingService.description} onChange={e => setEditingService({ ...editingService, description: e.target.value })} />
                            </div>
                            <div className="space-y-2">
                                <Label>Price Text</Label>
                                <Input value={editingService.price} onChange={e => setEditingService({ ...editingService, price: e.target.value })} />
                            </div>
                            <div className="flex items-center space-x-2 pt-2">
                                <input
                                    type="checkbox"
                                    id="edit-popular"
                                    className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary"
                                    checked={editingService.popular}
                                    onChange={e => setEditingService({ ...editingService, popular: e.target.checked })}
                                />
                                <Label htmlFor="edit-popular" className="font-medium">Mark as Popular</Label>
                            </div>
                        </div>
                    )}
                    <DialogFooter>
                        <Button className="w-full" onClick={handleUpdateService}>Update Service</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Admin;
