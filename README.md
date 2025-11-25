# 📊 Real-time Analytics Dashboard

Dashboard de análisis en tiempo real construido con **Next.js 14**, **TypeScript**, **Tailwind CSS** y **Recharts**. Implementa **Server-Sent Events (SSE)** para actualizaciones en vivo de métricas y KPIs.

## ✨ Características

- 📈 **Métricas en Tiempo Real**: KPIs que se actualizan automáticamente cada 5 segundos
- 📊 **Gráficos Interactivos**: Line charts y bar charts con Recharts
- 🔴 **Indicador de Estado**: Muestra conexión en vivo con animación
- 🎨 **UI Moderna**: Diseño oscuro con gradientes y efectos glassmorphism
- ⚡ **Server-Sent Events**: Stream continuo de datos del servidor
- 📱 **Responsive**: Totalmente adaptable a dispositivos móviles
- 🔄 **Refresh Manual**: Botón para actualización manual de datos

## 🛠️ Tecnologías

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Recharts** (gráficos)
- **Lucide React** (iconos)
- **Server-Sent Events** (actualizaciones en tiempo real)

## 📦 Instalación

```bash
# Clonar o navegar al directorio
cd dashboard-analytics

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

## 🚀 Despliegue en Vercel

### Opción 1: Desde GitHub

1. Sube el proyecto a GitHub
2. Ve a [Vercel](https://vercel.com)
3. Haz clic en "New Project"
4. Importa tu repositorio
5. Vercel detectará automáticamente Next.js
6. Haz clic en "Deploy"

### Opción 2: CLI de Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel

# Para producción
vercel --prod
```

## 📁 Estructura del Proyecto

```
dashboard-analytics/
├── app/
│   ├── api/
│   │   ├── metrics/route.ts    # API para datos estáticos
│   │   └── stream/route.ts     # SSE para tiempo real
│   ├── layout.tsx              # Layout principal
│   ├── page.tsx                # Dashboard principal
│   └── globals.css             # Estilos globales
├── components/
│   ├── MetricCard.tsx          # Tarjeta de métrica/KPI
│   ├── LineChart.tsx           # Gráfico de líneas
│   ├── BarChart.tsx            # Gráfico de barras
│   └── RealtimeIndicator.tsx   # Indicador de conexión
├── lib/
│   ├── mockData.ts             # Generador de datos
│   └── utils.ts                # Funciones auxiliares
└── package.json
```

## 🎯 Características del Dashboard

### Métricas Principales
- **Revenue**: Ingresos con cambio porcentual
- **Active Users**: Usuarios activos en tiempo real
- **Orders**: Pedidos procesados
- **Conversion Rate**: Tasa de conversión

### Gráficos
- **Sales & Visitors Trend**: Tendencia de ventas y visitantes (7 días)
- **Sales by Category**: Ventas por categoría de producto

### Actividad Reciente
- Ventas completadas
- Nuevos usuarios
- Pedidos recibidos

## 🔧 Personalización

### Cambiar Intervalo de Actualización

En `app/api/stream/route.ts`:

```typescript
// Cambiar de 5000 (5 segundos) a otro valor
const interval = setInterval(sendData, 5000);
```

### Agregar Nuevas Métricas

1. Edita `lib/mockData.ts` y agrega tu métrica:

```typescript
{
  id: 'tu-metrica',
  title: 'Tu Métrica',
  value: getRandomInRange(100, 1000),
  change: getRandomFloat(-5, 10),
}
```

2. El componente `MetricCard` la mostrará automáticamente

### Conectar API Real

Reemplaza `lib/mockData.ts` con llamadas a tu API:

```typescript
export const fetchRealMetrics = async () => {
  const response = await fetch('https://tu-api.com/metrics');
  return response.json();
};
```

## 🌐 Variables de Entorno (Opcional)

Crea un archivo `.env.local` para configuraciones:

```env
NEXT_PUBLIC_API_URL=https://tu-api.com
API_KEY=tu-api-key
```

## 📊 Server-Sent Events

El dashboard usa SSE para recibir actualizaciones en tiempo real:

- **Endpoint**: `/api/stream`
- **Formato**: JSON
- **Intervalo**: 5 segundos
- **Auto-reconexión**: Incluida

## 🎨 Temas y Estilos

Personaliza colores en `tailwind.config.ts` y `app/globals.css`:

```css
:root {
  --background: #0a0a0a;
  --foreground: #ededed;
}
```

## 🔐 Consideraciones de Seguridad

Para producción:
- Implementa autenticación (NextAuth.js)
- Valida datos en el servidor
- Usa rate limiting en APIs
- Implementa CORS apropiadamente

## 📈 Optimizaciones

- **Caché**: Los componentes usan `'use client'` solo cuando es necesario
- **Lazy Loading**: Recharts se carga solo en el cliente
- **Memoización**: Considera usar `useMemo` para cálculos pesados

## 🐛 Troubleshooting

### SSE no conecta
- Verifica que el servidor esté corriendo
- Revisa la consola del navegador
- Confirma que `/api/stream` esté accesible

### Gráficos no se muestran
- Asegúrate de que `recharts` esté instalado
- Verifica que los datos tengan el formato correcto

## 🤝 Contribuciones

Este es un proyecto base. Siéntete libre de:
- Agregar más tipos de gráficos
- Implementar filtros de fecha
- Añadir exportación de datos
- Integrar con bases de datos reales

## 📄 Licencia

MIT License - Libre para uso comercial y personal.

## 👨‍💻 Desarrollado por

**Arcano Intelligence**
- Web: [arcano-intelligence.com](https://arcano-intelligence.com)
- Especializado en: AI Automation, Web Development, Branding

---

¿Necesitas personalización o integración con tu sistema? Contáctanos! 🚀
