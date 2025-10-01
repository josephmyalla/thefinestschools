# Calendar Component Fix Plan

## Problem Analysis

The [`calendar.tsx`](src/components/ui/calendar.tsx:55) component has a TypeScript error:
- **Error**: `Object literal may only specify known properties, and 'IconLeft' does not exist in type 'Partial<CustomComponents>'. (2353)`
- **Location**: Line 55 in the `components` prop of `DayPicker`

## Root Cause

The project uses `react-day-picker` version 9.10.0, which has breaking changes from earlier versions. In v9:
- The component prop names for navigation icons have changed
- `IconLeft` and `IconRight` are no longer valid component names
- The correct approach is to use `Chevron` or handle navigation differently

## Solution

### Current Code (Problematic)
```typescript
components={{
  IconLeft: ({ ..._props }) => <ChevronLeft className="h-4 w-4" />,
  IconRight: ({ ..._props }) => <ChevronRight className="h-4 w-4" />,
}}
```

### Fixed Code
```typescript
components={{
  Chevron: ({ orientation, ...props }) => {
    if (orientation === 'left') {
      return <ChevronLeft className="h-4 w-4" {...props} />;
    }
    return <ChevronRight className="h-4 w-4" {...props} />;
  },
}}
```

## Alternative Solutions

### Option 1: Use Individual Components (Recommended)
```typescript
components={{
  Chevron: ({ orientation, ...props }) => {
    const Icon = orientation === 'left' ? ChevronLeft : ChevronRight;
    return <Icon className="h-4 w-4" {...props} />;
  },
}}
```

### Option 2: Remove Custom Components (Fallback)
If the above doesn't work, we can remove the custom components entirely and let react-day-picker use its default navigation:
```typescript
// Remove the components prop entirely
```

## Implementation Steps

1. **Replace the problematic component props** with the correct v9 API
2. **Test the calendar component** to ensure navigation works
3. **Verify TypeScript compilation** passes without errors
4. **Check visual appearance** matches the intended design

## Additional Considerations

- The `ChevronLeft` and `ChevronRight` imports from `lucide-react` are correct and should remain
- The styling classes `"h-4 w-4"` should be preserved for consistent icon sizing
- The component should maintain backward compatibility with existing usage

## Files to Modify

- [`src/components/ui/calendar.tsx`](src/components/ui/calendar.tsx:54-57) - Lines 54-57 need to be updated

## Testing Requirements

After implementation:
1. Verify TypeScript compilation succeeds
2. Test calendar navigation (previous/next month)
3. Ensure icons render correctly
4. Confirm no console errors in browser