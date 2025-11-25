# 🔧 Guía de Solución de Problemas - Vercel Deployment

## Error: 404 NOT_FOUND / DEPLOYMENT_NOT_FOUND

### Causa
Este error ocurre cuando:
1. El deployment fue eliminado
2. La URL es incorrecta
3. El proyecto no se buildeó correctamente

### ✅ Solución Paso a Paso

#### 1. Verificar Estado del Proyecto en Vercel

```bash
# Ir a tu dashboard de Vercel
https://vercel.com/[tu-username]/[proyecto]/deployments
```

#### 2. Hacer un Deploy Fresco

**Opción A: Desde el Dashboard de Vercel**
1. Ve a tu proyecto en Vercel
2. Click en "Deployments"
3. Click en los 3 puntos (...) del deployment más reciente
4. Selecciona "Redeploy"

**Opción B: Desde GitHub**
1. Haz un pequeño cambio en tu código (ejemplo: edita README.md)
2. Haz commit y push:
```bash
git add .
git commit -m "fix: trigger redeploy"
git push
```
3. Vercel automáticamente hará un nuevo deploy

**Opción C: Desde CLI**
```bash
# Asegúrate de estar en el directorio del proyecto
cd dashboard-analytics-fixed

# Login si no lo has hecho
vercel login

# Deploy
vercel --prod
```

#### 3. Verificar Build Logs

Si el build falla:
1. Ve a Vercel Dashboard → Tu Proyecto → Deployments
2. Click en el deployment fallido
3. Revisa la pestaña "Build Logs"
4. Busca errores en rojo

#### 4. Limpiar Cache de Vercel

```bash
# Usando CLI
vercel --prod --force

# O desde Dashboard
Deployments → ... → Redeploy → Marcar "Clear build cache"
```

## 🐛 Errores Comunes y Soluciones

### Error: "Module not found"
```bash
# Borrar node_modules y reinstalar
rm -rf node_modules package-lock.json
npm install
vercel --prod
```

### Error: "Build timeout"
✅ **YA SOLUCIONADO** en esta versión con:
- `export const dynamic = 'force-dynamic'`
- `export const runtime = 'edge'`

### Error: "Function exceeded timeout"
Agregar en `vercel.json`:
```json
{
  "functions": {
    "app/api/stream/route.ts": {
      "maxDuration": 300
    }
  }
}
```

### Error: SSE no funciona en producción
1. Verifica que uses HTTPS (Vercel lo hace automáticamente)
2. Revisa que `runtime = 'edge'` esté configurado
3. Comprueba logs: `vercel logs [url]`

## 📊 Verificar que Todo Funciona

Después del deploy, prueba:

1. **Homepage**: `https://tu-app.vercel.app/`
2. **API Metrics**: `https://tu-app.vercel.app/api/metrics`
3. **SSE Stream**: Abre DevTools → Network → busca `/api/stream`

## 🔍 Comandos Útiles

```bash
# Ver logs en tiempo real
vercel logs --follow

# Ver información del proyecto
vercel inspect

# Listar todos tus proyectos
vercel ls

# Ver deployments
vercel deployments

# Eliminar deployment específico
vercel rm [deployment-url]
```

## 📝 Checklist Pre-Deploy

- [ ] `npm run build` funciona localmente
- [ ] `npm run dev` funciona sin errores
- [ ] `.gitignore` excluye `node_modules` y `.next`
- [ ] `package.json` tiene scripts correctos
- [ ] No hay errores de TypeScript
- [ ] Archivos API tienen `export const dynamic = 'force-dynamic'`

## 🆘 Si Nada Funciona

1. **Crear proyecto nuevo en Vercel**
```bash
# Borrar proyecto actual en Vercel Dashboard
# Luego hacer nuevo deploy
vercel --prod
```

2. **Verificar límites de plan**
- Free plan: 100 GB bandwidth/mes
- Hobby: Unlimited deployments
- Revisa tu uso en Vercel Dashboard

3. **Contactar Soporte**
Si nada funciona, puede ser un issue de Vercel:
- https://vercel.com/support

## 📞 Contacto

Si sigues teniendo problemas, comparte:
1. URL del deployment
2. Screenshot del error
3. Build logs completos

---

💡 **Tip**: Usa `vercel dev` localmente para simular el entorno de producción antes de deployar.
