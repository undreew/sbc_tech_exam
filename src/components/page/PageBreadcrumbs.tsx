import React from 'react';
import Link, {LinkProps} from 'next/link';

import {ChevronLeft} from '@mui/icons-material';
import {Breadcrumbs, Stack, Typography} from '@mui/material';

export interface BreadcrumbItem {
	href?: LinkProps['href'];
	children: string;
}

interface Props {
	isLoading?: boolean;
	items: BreadcrumbItem[];
}

function PageBreadcrumbs(props: Props) {
	const {items} = props;
	return (
		<Breadcrumbs maxItems={4} aria-label='breadcrumb'>
			{items.map((item, index) => {
				const {href, children} = item;
				if (href) {
					return (
						<Stack direction='row' key={index}>
							<ChevronLeft />
							<Link color='inherit' href={href}>
								{children}
							</Link>
						</Stack>
					);
				}
				return <Typography key={index}>{children}</Typography>;
			})}
		</Breadcrumbs>
	);
}

export default PageBreadcrumbs;
