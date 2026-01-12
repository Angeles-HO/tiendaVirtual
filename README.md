# tiendaVirtual

## fork de: Angeles-ho

instalar dependencias

```
npm ci
```

iniciar app en directorio root "/"

```
npm start
```

--

Este fork de **tiendaVirtual** usa la arquitectura del proyecto original incorporando un **server Express**, una **estructura modular** y una base sólida para escalar hacia una **base de datos real**.  
Se ha reorganizado el código en capas de **controllers** y **services**, separando claramente la lógica de negocio, el acceso a datos y la capa de presentación (frontend).

Principales mejoras de este fork:

- Sustitución del servidor básico por un **servidor Express** en Node.js, con rutas organizadas y con facil integracion con futuros middlewares.
- **Reestructuración modular del backend** (controllers, services, conexión a base de datos) para facilitar el mantenimiento, testing y ampliaciones futuras.
- Preparación para **migrar desde JSON a una base de datos real** (por ejemplo, MySQL, PostgreSQL o MongoDB), centralizando la lógica de acceso a datos en la capa de servicios.
- Separación clara entre **frontend y backend**.
- Enfoque en buenas prácticas: responsabilidad única por módulo, reutilización de código y organización del proyecto pensada para crecer con nuevas funcionalidades.

Este fork sirve como base para seguir evolucionando la tienda virtual hacia un entorno de producción escalable, mantenible y fácil de extender.
